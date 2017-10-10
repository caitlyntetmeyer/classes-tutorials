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

https://app.pluralsight.com/player?course=advanced-javascript&author=kyle-simpson&name=advanced-javascript-m2&clip=3&mode=live

*/








































