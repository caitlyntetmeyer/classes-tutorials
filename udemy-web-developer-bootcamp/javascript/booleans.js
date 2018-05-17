// Boolean Logic

// Comparison Operators: >, >=, <, <=, ==, !=, ===, !==

var x = 99;
x == "99";  // true because JavaScript performed type coercion
x === "99"; // false because they're of different types

var y = null;
y == undefined;  // true
y === undefined; // false


// Why You Shouldn't Use ==
true == "1";       // true
0 == false;        // true
null == undefined; // true
NaN == NaN;        // false

// Logical Operators: &&, ||, !

// Exercise 1
var x = 10;
var y = "a";

y === "b" || x >= 10; // true

// Exercise 2
var x = 3;
var y = 8;

!(x == "3" || x === y) && !(y !=8 && x <=y);
// false                  true
// false

// Truthy and Falsy Values
!!"hello"; // true

// Falsy: 0, null, NaN, undefined, false, empty string

// Exercise 3
var str = ""; // falsy
var msg = "haha!"; // truthy
var isFunny = "false"; // truthy

!((str || msg) && isFunny);
// NOT ((falsy OR truthy) AND truthy)
// NOT (true AND true)
// NOT true
// false
