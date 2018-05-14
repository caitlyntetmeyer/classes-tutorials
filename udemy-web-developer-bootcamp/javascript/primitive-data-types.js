// 5 Primitive Datatypes in JavaScript

// Numbers (whole, fractional, negative)
4
9.3
-10

// Strings (text inside of quotes)
"Hello World"
"43"
	// Single or double quotes are okay
	"hello world"
	'hello world'

	// Concatenation
	"charlie" + "brown" // "charliebrown"
	"hi " + "goodbye" // "hi goodbye"

	// Escape characters start with "\"
	"Singin \"Do wah diddy\""
	"This is a backslash: \\"

	// Strings have a length property
	"hello world".length // 11

	// Access individual characters using [] and an index
	"hello"[0] // "h"
	"hello"[4] // "o"

	// Exercises
	100 % 3 // 1
	("blah" + "blah")[6] // "a"
	"hello".length % "hi\\".length // 2

// Booleans
true
false

// undefined (declared but not initialized)
var name;
var age;

// null (explicitly nothing)
var currentPlayer = 'charlie';
currentPlayer = null; // game over
