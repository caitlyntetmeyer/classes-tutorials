/* 

Arrow Functions

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

An arrow function expression has a shorter syntax than a function expression and does NOT have its own "this", arguments, "super", or "new.target".

These function expressions are best suited for non-method functions, and they can NOT be used as constructors.

*/

var materials = [
	'Hydrogen',
	'Helium',
	'Lithium',
	'Beryllium'
];

console.log(materials.map(material => material.length)); // Array [8, 6, 7, 9]

/* Basic Syntax of Arrow Functions: */
(param1, param2, ..., paramN) => { statements }
(param1, param2, ..., paramN) => expression // equivalent to: => { return expression; }

// Parentheses are optional when there's only one parameter name:
(singleParam) => { statements }
singleParam => { statements }

// The parameter list for a function w/no parameters is written w/a pair of parentheses:
() => { statements }

/* Advanced Syntax of Arrow Functions: */

// To return an object literal expression, put the body of the function in parentheses:
params => ({foo: bar})

/* Detour: Objects

https://www.sitepoint.com/back-to-basics-javascript-object-syntax/

Object literals are denoted by curly braces.
Example of object literal notation: */

var object = {};

// Example:
var object = {
	foo: 1, // number
	"bar": "some string", // string
	baz: { // empty object
	}
};

// For ** accessing object properties, ** there are 2 notations:
// 1. Dot notation (object's name, followed by period, followed by property name)
	object.foo = object.foo + 1;
// 2. Bracket notation (object's name, followed by square brackets, followed by property name as a string)
	object["foo"] = object["foo"] + 1;

// You can create property names on the fly using bracket notation.
// Example: Property name "foo" is created by concatenating the contents of variable "f" with the string "oo":

var f = "f";

object[f + "oo"] = "bar";

// This is possible in bracket notation:

object["!@#$%^&*()."] = true;

// Accessing Nested Properties

// Example setup:

var object = {
	baz: {
		foo: {
			bar: 5
		}
	}
};

// Examples of accessing the nested property "bar" from above:

object.baz.foo.bar; // My fave of these 3
object["baz"]["foo"]["bar"]; // Okay, too much typing
object["baz"].foo["bar"]; // Why would you do this

// It's better to store "bar" in a local variable to save computing time:

var bar = object.baz.foo.bar;
var count = 0;

for (var i = 0; i < 100000; i++) {
	count += bar;
}

// Functions as Methods

// When a function's used as an object PROPERTY, it's called a METHOD. Methods can be specified in object literal notation.

var object = {
	sum: function(foo, bar) {
		return foo + bar;
	}
 }



/*

Back to arrow functions:

*/

// Rest












