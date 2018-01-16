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