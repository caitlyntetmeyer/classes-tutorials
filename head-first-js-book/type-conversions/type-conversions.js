// Type Conversion and Addition
var addi = 3 + "4"; // "34" because when you have a string added to a number, you get concatenation, not addition
var plusi = "4" + 3; // "43" (same reason as line 1)


// What About Other Arithmetic Operators?
var multi = 3 * "4"; // 12 because JS converts the string "4" to the number 4 and multiplies it by 3
var divi = 80 / "10"; // 8 because "10" is converted to the number 10
var mini = "10" - 5; // 5 because "10" is converted to the number 10

// Weird Ones
-true; // -1
true + "love"; // "true love"

// Convert a string into a number:
Number("4"); // 4
var num = 3 + Number("4"); // 7

Number("Jehosaphat"); // NaN

// ---

Infinity - "1"; // Infinity
"42" + 42; // "4242"
2 + "1 1"; // "21 1"
99 + 101; // 200
"1" - "1"; // 0
console.log("Result: " + 10/2); // "Result: 5"
3 + " bananas " + 2 + " apples"; // "3 bananas 2 apples" 