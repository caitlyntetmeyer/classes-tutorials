/*
Basics of Programming with JavaScript

JavaScript Syntax

https://app.pluralsight.com/player?course=javascript-programming-basics&author=kyle-simpson&name=javascript-programming-basics-m2&clip=0&mode=live

Operators

There are often 2 ways to do sth:
*/
a = a + 2;
a += 2;

// Readability and understandability are completely subjective.

/* 
Values and Types

These are NOT the same:
*/
42; // number
"42"; // string

// What's the first character of "42"?
"42"[0]; // 4

"abc"[1]; // b

// Pick single quotes or double quotes. Never mix them.

// Try these in the console:
a = 42;
console.log(a); // 42 (printed in blue characters because it's a number)

a = "42";
console.log(a); // 42 (printed in black characters because it's a string)

// Coercion

a = a / 2;

// Explicit Coercion:
a = String(a); // converts 42 to "42"

console.log(a); // 21 (printed in black characters because it's a string)

b = Number(a); // converts "42" to 42

// Implicit Coercion:
a = 42;
a = a / 2;
a = a + ""; 
console.log(a); // 21  (printed in black because it's a string)

// Make an "a" that can never be changed again (only in the newest versions of JS):
const a = 42;

/*
Code Comments

Code comments are there for a _developer_ to read.
*/
// 42 is the meaning of life.
var a = 42;

/*
42 is
the meaning
of life.
*/
var b = 12;

/* 
Comments should never say WHAT the code does - 
the code _shows_ what it does. 
Comments should say WHY and/or HOW.
Be exactly as verbose as necessary - no more, no less.
*/

/*
Variables and Blocks

Always declare a variable before you use it.

This uses hoisting and would work, but you shouldn't do this:
*/
a = 42;
var a;

// 1st way - preferred:
var a; // puts it into a function
a = 42;
// That was a function scoping declaration because of "var."

// 2nd way - block scoping declarations (ES6):
let b = 2; // puts it into a block
const c = 42;

// 3rd way to declare a variable - do a function: 
function d() {};

/*
Blocks
*/

{
	var a = 42;
	foo(a / 2);
} // This block is just a stylistic thing. Shows that these two lines belong together and are separate from other stuff

// You're more likely to use a block as part of an if-statement:
if (a > 10) {
	// if true, execute code
}

// Or a while loop:
while (a > 10) {
	// if true, execute code
}

// Or 1. Declare a function:
function foo() {
	a = 10;
	bar(a / 2);
}
// 2. Run the function:
foo();

// 3 ways to name functions:
function foo() { }
var bar = function() { }
var bar = function baz() { }
// The block will not run unless you execute the function.

/*

Conditional Statements

https://app.pluralsight.com/player?course=javascript-programming-basics&author=kyle-simpson&name=javascript-programming-basics-m2&clip=4&mode=live

*/

var a = 10;

if (a > 5) { // result is always true or false
	a = a * 2;
}

// This is common:
if (a) {
	a = a * 2;
}

// Falsy Values (gonna become false):
0
-0
NaN
''
""
false
null
undefined
// Memorize these.


// A truthy value becomes true:
var a = 10;

if (a) { // value of a is 10, which isn't on the falsy list, so it's true
	a = a * 2;
}


// A falsy value becomes false:
var a = 0; // 0 is falsy (see above list)

if (a) {
	a = a * 2;
}


/*

Loops

https://app.pluralsight.com/player?course=javascript-programming-basics&author=kyle-simpson&name=javascript-programming-basics-m2&clip=5&mode=live

*/

if (a) { .. }

while (a > 10) { .. }

for (a = 5; a < 10; a++) {
// "a = 5" is an initialization expression
// "a < 10" is a conditional expression
// "a++"" is the update clause (a = a + 1)
// All 3 of these clauses are OPTIONAL in for loops.

	console.log(a); // 5 6 7 8 9
}
// When "a" got too big, we stopped the loop. "For" loops stop WHEN A CONDITIONAL FAILS, not "as long as it's true."

// You could technically write (though it would be silly):
for (;;) { }
// This loop will run forever because ** a conditional will never fail **, NOT because it's always true.

// This loop would run forever because it would never fail:
for (a = 5; a < 10; a++) {
	a = 6;
	console.log(a);
}
// 5 6 7 6 7 6 7 6...


// A LOOP RUNS FOREVER UNTIL SOMETHING TELLS IT TO STOP

// Illustration of what for loops do (don't write loops like this):
a = 5;
while (true) {
	if (a >= 10) {
		break;
	}
	console.log(a);
	a++;
}
// illustrates the concept that a loop runs until something makes it stop


/* 

Functions

https://app.pluralsight.com/player?course=javascript-programming-basics&author=kyle-simpson&name=javascript-programming-basics-m2&clip=6&mode=live

*/

function printAmount() {
	console.log(amount.toFixed(2)); // formats number to 2 decimal places. The number ends up being a string.
}

var amount = 99.99;

printAmount(); // "99.99" - it's a string now

amount += 2;

printAmount(); // "199.98"

// Example:

function printAmount(amt) {
	console.log(amt.toFixed( 2 ));
}

// Example:

function foo() {
	a *= 2;
	a += 3;
}

var a = 10;

foo();

console.log(a); // 23;

foo();
foo();
console.log(a); // 23 101

// Have a consistent style. For example, put all your variables at the top of each file.


/*

Parameters

*/

// Functions can receive paramenters, such as "b" below:

function foo(b) {
	a *= 2;
	a += b;
}

a = 10;

foo(3); // "b" is 3
console.log(a); // "23"

foo(100); // "b" is 100
console.log(a); // "120"

// To be specific, it's an argument when you pass it in; it's a parameter when you assign it.

// Example:

function foo(b) {
	a *= 2;
	a += b;
}

function bar() { .. }

foo( bar );
// What value is currently in "bar"? It's a function value. We're passing the function bar as an argument. It's b???

// This is different from "foo( bar );"
foo ( bar() );


// Example:
function foo(b) {
	a *= 2;
	a += b;
	return a / 2; // 11.5
}

var a = 10;

var b = foo(3); // different from the b on line 316

console.log(a); // 23
console.log(b); // 11.5

// End Functions section.


/*

Scope

https://app.pluralsight.com/player?course=javascript-programming-basics&author=kyle-simpson&name=javascript-programming-basics-m2&clip=7&mode=live

*/

function foo(b) {
	var c = 42; // not available outside of the function
	a *= 2;
	a += b;
	return a / 2; 
}

var a = 10;

console.log(a); // 23
console.log(b); // error because the b only exists inside of the function
console.log(c); // ReferenceError: c is not defined

// Scope - think of it this way: There's a bubble around the internal contents of foo and a bubble around the stuff that's outside of the function.

/*

Challenge 1 - MY UNSUCCESSFUL ATTEMPT

https://app.pluralsight.com/player?course=javascript-programming-basics&author=kyle-simpson&name=javascript-programming-basics-m2&clip=8&mode=live

*/

// Set up constants: tax rate, phone price, accessory price, spending threshold
var taxRate = 0.07;
var phonePrice = 999;
var accessoryPrice = 49;
var spendingThreshold = 10000;

// Variable for "bank account balance"
var bankAccountBalance = 10000;

console.log(phonePrice * taxRate);

// Calculate total price of phone purchase. Format price w/"$" and round to 2 decimal places
// Function to add tax ($__.__ - 2 decimal places)
function totalPriceOfPhone() {
	return phonePrice * taxRate;
}

console.log(totalPriceOfPhone());

function formatPrice(totalPriceOfPhone) {
	return "$" + totalPriceOfPhone.toFixed(2);
}

console.log(formatPrice());

// Print calculated purchase amount


// Check amount against bank account balance to see if I can afford it or not
if (totalPriceOfPhone <= bankAccountBalance) {
	phonePrice++;
	accessoryPrice++;
}

console.log(totalPriceOfPhone);
// Keep purchasing phones until bank account runs out of money

// Buy accessories for each phone, as long as purchase amount is below mental spending threshold


/*

Challenge 1 - CORRECT ANSWER

https://app.pluralsight.com/player?course=javascript-programming-basics&author=kyle-simpson&name=javascript-programming-basics-m2&clip=9&mode=live

*/

// By convention, type the names of constants in ALL CAPS:

const SPENDING_THRESHOLD = 200; // can use "const" if using ES6
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

// A constant must have something assigned to it.

var bank_balance = 303.91; // It's a variable instead of a constant because you might want to prompt a user for this amount (as a bonus exercise)

var amount = 0;

function calculateTax(amount) {
	return amount * TAX_RATE;
}

function formatAmount(amount) {
	return "$" + amount.toFixed( 2 ); // ".toFixed( 2 )" rounds the number to 2 decimal places.
}

// keep buying phones while you still have money
while (amount < bank_balance) {
	// buy a new phone!
	amount += PHONE_PRICE;

	// can we afford the accessory?
	if (amount < SPENDING_THRESHOLD) {
		amount += ACCESSORY_PRICE;
	}
}

// pay the government
amount += calculateTax( amount );

console.log("Your purchase: " + formatAmount( amount ));
// Your purchase: $334.76

// can you actually afford this purchase?
if (amount > bank_balance) {
	console.log(
		"You can't afford this purchase."
	);
}

/*

When I run this in the console, I get: 

Your purchase: $334.76
You can't afford this purchase.

*/

/* Generally, think of a function as self-contained - you don't make any changes outside of it or rely on a ton of stuff outside of it.
Caveat: the design feature called a "closure" - when you intentionally want a function to remember stuff outside, so it can keep track of its state. (ch. 2 of book)
Does a function always return a value? No. You have to say "return".
BUT there's always a RESULT from a function call - either that which you explicitly return, or "undefined". */


/*

ECMAScript 6

https://app.pluralsight.com/player?course=javascript-programming-basics&author=kyle-simpson&name=javascript-programming-basics-m2&clip=10&mode=live

*/

// Chrome, Firefox, IE all support ECMAScript 6 (ES6).
// Use a transpiler when using older browsers that don't support ES6. Ex: babeljs.io:

// On the left, he typed:
const x = 10;

// The right-hand side showed this:
"use strict";

var _temporalAssertDefined = function (val, name, undef) {
	if (val === undefined) {
		throw new ReferenceError(name + " is not defined - temporal dead zone"); 
	} return true; 
}

var _temporalUndefined = {};
var x = _temporalUndefined;
x = 10;

// The new norm is that you always write in the newest version of JS and add a build step: Use BABEL to transpile your code to a lower version of JS for users w/older browsers.

// To play around w/ES6: es6fiddle.net

// He typed into the left-hand side:
const x = 10;
console.log(x);
x = 20;
console.log(x);

// Is es6fiddle going to allow it?
// No, we get an error:
_1.js:5:1: x is read-only
// It was transpiled behind the scenes.
