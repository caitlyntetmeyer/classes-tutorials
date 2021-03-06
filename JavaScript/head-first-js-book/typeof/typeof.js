var subject = "Just a string";
var probe = typeof subject;
console.log(probe); // string

var test1 = "abcdef";
var test2 = 123;
var test3 = true;
var test4 = {};
var test5 = [];
var test6;
var test7 = {"abcdef": 123};
var test8 = ["abcdef", 123];
function test9() {
	return "abcdef"
};
var test10 = null;

console.log(typeof test1); // string
console.log(typeof test2); // number
console.log(typeof test3); // boolean
console.log(typeof test4); // object
console.log(typeof test5); // object
console.log(typeof test6); // undefined
console.log(typeof test7); // object
console.log(typeof test8); // object
console.log(typeof test9); // function
console.log(typeof test10); // object

if (99 == "99") {
	console.log("A number equals a string!");
} else {
	console.log("No way a number equals a string")
} // A number equals a string!