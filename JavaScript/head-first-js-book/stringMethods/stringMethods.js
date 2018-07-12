// The length property and the charAt method

var input = "jenny@wickedlysmart.com";
for (var i = 0; i < input.length; i++) {
	if (input.charAt(i) === "@") {
		console.log("There's an @ sign at index " + i);
	} // There's an @ sign at index 5
} 


// The indexOf method

var phrase = "the cat in the hat";
var index = phrase.indexOf("cat");
console.log("there's a cat sitting at index " + index); // there's a cat sitting at index 4

// Start the search at index 5
index = phrase.indexOf("the", 5);
console.log("there's a the sitting at index " + index); // there's a the sitting at index 11

// If the string can't be found, then -1 is returned as the index.
index = phrase.indexOf("dog");
console.log("there's a dog sitting at index " + index); // there's a dog sitting at index -1


// The substring method

// Give the substring method 2 indices, and it'll extract and return the string contained w/in them.
var data = "name|phone|address";
// We'd like to return the string from index 5 and up to, but not including, 10:
var val = data.substring(5, 10);
console.log("Substring is " + val); // Substring is phone

// If you omit the 2nd index, substring will extract a string that starts at the first index and continues until the end of the string:
val = data.substring(5);
console.log("Substring is now " + val); // Substring is now phone|address


// The split method

// The split method takes a character that acts as a delimiter, and it breaks the string into parts based on the delimiter.
var vals = data.split("|");
console.log("Split array is ", vals); // BTW we passed 2 args to console.log separated by a comma so that the vals array won't get converted to a string before it's displayed in the console!
// Split array is ["name", "phone", "address"]








