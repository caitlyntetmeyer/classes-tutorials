// Assignment statement:
a = b * 2;
/* 
Statements are composed of phrases, or expressions. 
5 examples of expressions: a, b, 2, b * 2, a = b * 2.
*/

// More complex statement:
a = b * 2 + foo(c * 3);
/*
Expressions:
a
b
2
foo
c
3
b * 2
c * 3
foo(c * 3)
the whole right side
the whole thing
*/

/* 
Executing a program = running a program. Translating source code from a high-level language like JS to 1's and 0's.
The translation is done by the JavaScript engine.
*/

/* 
Mythbusting: JS is not presently a scripting language. It's not interpreted line by line, one after the other. In the earliest days of JS, it worked more like that.
*/

/*
JS is a compiled language. Compilation means that there's more than one pass through your program.
*/
a = 2;
2(); /* "Uncaught TypeError: 2 is not a function". It's syntactically invalid because you can't have a number in the place of a function call.
Since JS is a compiled language, the JS interpreter wouldn't run either line because it'd immediately realize that the 2nd line's invalid and throw an error.
*/

var a;
a(); // "Uncaught TypeError: a is not a function"

// Open Chrome and use the dev console to run programs.

/*
Input and Output:

https://app.pluralsight.com/player?course=javascript-programming-basics&author=kyle-simpson&name=javascript-programming-basics-m1&clip=7&mode=live
*/

alert("Hello World");
// The browser pops up an alert that says "Hello World". It's not JS itself that's doing this; it's the browser.

console.log("Hello World");

var a = 2;
console.log(a); // 2

// If you type this in the console...
a = 2; // ...the console outputs 2.

var age = prompt("What is your age?");
// Let's say that the user enters "35".
console.log(age); // 35
