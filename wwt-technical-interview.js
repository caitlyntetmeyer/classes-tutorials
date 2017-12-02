/*
 * Write a function that takes in 1 argument: filterString
 * Return the subset of the names in the 'people' array that contain filterString
 */

let people = ["Leanne Graham", "Ervin Howell", "Clementine Bauch", "Patricia Lebsack", "Chelsey Dietrich"]

function filter(filterString) {

	// If the string contains filterString, print the string.
	for (string of people) {
		if string.includes(filterString) {
			console.log(string);
		}
	}
	
}
// Not sure how to create a new array out of the strings that contain filterString.
