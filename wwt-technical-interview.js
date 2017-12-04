/*
 * Write a function that takes in 1 argument: filterString
 * Return the subset of the names in the 'people' array that contain filterString
 */

// let people = ["Leanne Graham", "Ervin Howell", "Clementine Bauch", "Patricia Lebsack", "Chelsey Dietrich"] // given

// My attempt:
// function filter(filterString) {

// 	// If the string contains filterString, print the string.
// 	for (string of people) {
// 		if string.includes(filterString) {
// 			console.log(string);
// 		}
// 	}
	
// }
// Couldn't complete it. Not sure how to create a new array out of the strings that contain filterString.

// ---

// Jared's Solution:
const people = ['Leanne Graham', 'Ervin Howell', 'Clementine Bauch', 'Patricia Lebsack', 'Chelsey Dietrich'];

function filterPeople (filterString) {
    const filteredPeople = [];
    people.forEach(function (person) {
        if (person.includes(filterString)) {
            filteredPeople.push(person);
        }
    });
    return filteredPeople;
}

const results = filterPeople('ne');
console.log(results);	// ["Leanne Graham", "Clementine Bauch"]
