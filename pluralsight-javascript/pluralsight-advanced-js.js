/*

Advanced JavaScript by Kyle Simpson -
@getify
http://getify.me
http://speakerdeck.com/getify
http://YouDontKnowJS.com

https://app.pluralsight.com/player?course=advanced-javascript&author=kyle-simpson&name=advanced-javascript-m1&clip=0&mode=live

Recommended Books:
High Performance JavaScript
JavaScript Patterns

---

JavaScript Resources

https://app.pluralsight.com/player?course=advanced-javascript&author=kyle-simpson&name=advanced-javascript-m1&clip=2&mode=live

https://developer.mozilla.org/en-US/docs/JavaScript -

JavaScript (JS) is a lightweight interpreted
or JIT-compiled programming language
with first-class functions.
While it is most well-known as the scripting language for Web pages, 
many non-browser environments also use it,
such as node.js, Apache CouchDB and Adobe Acrobat.

JS is a prototype-based, multi-paradigm, dynamic language,
supporting object-oriented, imperative, and declarative
(e.g. functional programming) styles.

https://github.com/rwldrn/idiomatic.js -
Principles of Writing Consistent, Idiomatic JavaScript

http://www.ecma-international.org/ecma-262/5.1/ 
(Kyle discussed of the "this" keyword, "this bindings" "thisArg," etc. in the above spec)

---

Course Plan

https://app.pluralsight.com/player?course=advanced-javascript&author=kyle-simpson&name=advanced-javascript-m1&clip=4&mode=live

Advanced JavaScript: The "What You Need to Know" Parts

Agenda: Scope and Closures
-Nested scope
-Hoisting
-"this" (completely different from nested scope and hoisting)
-Closure

Exercises we'll do: spend 7-15 minutes on each

Goal: Get solid understanding of core mechanisms that JS is built on

---

Scope and the JavaScript Compiler

https://app.pluralsight.com/player?course=advanced-javascript&author=kyle-simpson&name=advanced-javascript-m2&clip=0&mode=live

scope - where to look for things (ex: variables)

JS is a compiled language, but not in the way C++ is. 
In JS, we send the original source code program. 
It's compiled every time that it's run.

Diff. btwn interpreted and compiled lang.: 
An interpreter goes from top to bottom (ex: bash scripting).
In JS, the compiler does an initial pass to compile the code, then does a final pass to actually run the code.

JS has function scope ONLY. Usually. 

JIT (Just In Time) Compilation - the JS code is compiled right before it runs

---

1) Compiling Function Scope (see below code)

https://app.pluralsight.com/player?course=advanced-javascript&author=kyle-simpson&name=advanced-javascript-m2&clip=1&mode=live

---

2) Execution of Function Scope (see below code)

https://app.pluralsight.com/player?course=advanced-javascript&author=kyle-simpson&name=advanced-javascript-m2&clip=2&mode=live

*/

// Compilation: We're in the global scope.
var foo = "bar"; // This line is TWO statements: the declaration and the initialization.

// The LHS (left-hand side) is the TARGET and the RHS (right-hand side) is the SOURCE.

// Compilation: We're still in the global scope.
function bar() {
	var foo = "baz"; // Compilation: We're now in the scope of bar.
}

// Compilation: We're back in the global scope.
function baz(foo) {
	foo = "bam"; // Compilation: We're now in the scope of baz.
	bam = "yay"; /* Compilation: We're still in the scope of baz. 
	Line 105: We didn't type "var," and we're not in strict mode, so JS will create a var bam for us as a GLOBAL variable. 
	This is how leakage happens. 
	To avoid this problem, write your code in strict mode. */
}

/* 

"Undeclared" and "undefined" are DIFFERENT!

undeclared - there's no present value for this because it hasn't been declared yet

undefined - it WAS declared, but it has a special empty value

---

Scope and Execution Example

https://app.pluralsight.com/player?course=advanced-javascript&author=kyle-simpson&name=advanced-javascript-m2&clip=3&mode=live */

var foo = "bar";

function bar() {
	var foo = "baz"; // looks for var foo in the LOCAL scope first, then if it doesn't find it, it looks in the GLOBAL scope

	function baz(foo) {
		foo = "bam";
		bam = "yay";
	}
	baz(); // executes the function baz()
}

// We're now in global scope.

bar(); // executes the function "bar()" from line 127.
foo; // "bar" - executes the "foo" in line 125 because we're in global scope.
bam; // "yay" - global scope can't find "bam", and "bam" is an LHS (target) reference, so global scope automatically creates "bam".
baz(); // global scope doesn't know what "baz()" is, and "baz()" is an RHS (source) reference, so we get an error. (We know "baz()" is an RHS reference because it's not an LHS reference.)

/* Function Declarations, Function Expressions and Block Scope

https://app.pluralsight.com/player?course=advanced-javascript&author=kyle-simpson&name=advanced-javascript-m2&clip=4&mode=live 
*/
var foo = function bar() { // Since "function" is not the first word of the statement, we know that "bar()" is a function _expression_, NOT a function _declaration_.
	var foo = "baz";

	function baz(foo) {
		foo = bar;
		foo; // function...
	}
	baz();
};

foo();
bar(); // ReferenceError - because "bar()" not a function _declaration_ (we know it's not because the word "function" is NOT the first word of the statement on line 148)

/* Using an anonymous (unnamed) function expression is bad. 
Don't do that.  
It won't play well in debugging. 
So give it a descriptive name! 

---

New Slide: "Scope: block scope?"

As of ES3, when "try" and "catch" were added: Those are BLOCK SCOPE.
IE6 screwed this up, but IE7 and above, and all other browsers, have it right.
*/
var foo;

try {
	foo.length;
}
catch (err) {
	console.log(err); // TypeError
}

console.log(err); // ReferenceError

/* Lexical Scope

lex - the parsing stage is called "lexing," so...

lexical scope - compile-time scope - at the time you wrote your code and the code got compiled, all decisions were set in stone by the compiler

---

Cheating Lexical Scope: eval

The "eval" keyword takes a string and treats it as if it were code at runtime. So "eval" _modifies the code at runtime_ to include the string as if it had been written as code back at author-time. */
var bar = "bar";

function foo(str) {
	eval(str) // cheating (modifies it at runtime) - this slows down your code - don't use it
	console.log(bar); // 42
}

foo("var bar = 42;");

// IIFE Pattern:

var foo = "foo";

(function() {
	var foo = "foo2";
	console.log(foo); // "foo2"
})();

console.log(foo); // "foo"

// Function Scope:

var foo = "foo";

(function(bar) {
	var foo = bar;
	console.log(foo); // "foo"
})(foo);

console.log(foo); // "foo"

/* Block Scope in ES6:

The "let" keyword is similar to "var" in that it'll declare a variable - however, the "let" keyword will attach that variable implicitly to whatever block of code it appears in, rather than attaching it to the function. */
function foo() {
	var bar = "bar";
	for (let i=0; i<bar.length; i++) {
		console.log(bar.charAt(i));
	}
	console.log(i); // ReferenceError
}

foo();
/* "let" doesn't allow hoisting, which is a problem.

---

Here's some code transpiled by the tool let-er: */

try{throw void 0}catch
/*let*/(foo) {
	foo = "foo";
	console.log(foo);
}

foo; // Reference Error!

/* Quiz

https://app.pluralsight.com/player?course=advanced-javascript&author=kyle-simpson&name=advanced-javascript-m2&clip=12&mode=live

Q: What type of scoping rule does JS have?
A: Lexical scoping

Q: What are exceptions to the lexical scoping rule?
A: "eval" and the "with" keyword

Q: What are the different ways you can create a new scope?
A: functions, catch blocks, curly braces w/the "let" keyword

Q: What's the difference between "undeclared" and "undefined"?
A: undeclared - there's no present value for this because it hasn't been declared yet. undefined - it WAS declared, but it has a special empty value


---

Hoisting

https://app.pluralsight.com/player?course=advanced-javascript&author=kyle-simpson&name=advanced-javascript-m2&clip=13&mode=live 

Hoisting isn't really a thing. It's just a conceptual model.

Lines 280-285:
Q: "What's the value of the variable on each line? How is each line going to execute?" 
A: The compiler will go through and compile everything first. So it will symbolically hoist the "var" lines up to the top. That way, each line will execute as if the "var" lines had come first. */
a;
b;
var a = b;
var b = 2;
b;
a;

// Q: How would this execute?
var a = b();
var c = d();
a;
c;

function b() {
	return c;
}

var d = function() {
	return b();
};
// A: Named functions are moved to the top first, then variables under the functions. Anonymous functions don't get hoisted (so, the "var d" chunk would stay at the bottom).

// Hoisting: functions first
foo(); // "foo" 

var foo = 2;

function foo() {
	console.log("bar");
}

function foo() {
	console.log("foo");
}

/* 

Recursion is when a function calls itself.
Mutual recursion refers to two or more functions calling each other.

Q: Why does JavaScript do hoisting?
A: This makes mutual recursion possible. 

Example: */
a(1);

function a(foo) {
	if (foo > 20) return foo;
	return b(foo+2);
}
function b(foo) {
	return c(foo) + 1;
}

// Scope: hoisting
function b() {
	return c;
}
var a;
var c;
var d;
a = b();
c = d();
a;
c;
d = function() {
	return b();
};


















