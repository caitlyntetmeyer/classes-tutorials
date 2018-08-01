var products = [
	{ name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
	{ name: "Orange", calories: 160, color: "orange", sold: 12101 },
	{ name: "Cola", calories: 210, color: "caramel", sold: 25412 },
	{ name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
	{ name: "Lemon", calories: 200, color: "clear", sold: 14983 },
	{ name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
	{ name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
	{ name: "Water", calories: 0, color: "clear", sold: 62123 }
];

// ---

var numbersArray = [60, 50, 62, 58, 54, 54];

// Compare two numbers at a time:
function compareNumbers(num1, num2) {
	if (num2 > num1) {
		return 1;
	} else if (num2 === num1) {
		return 0;
	} else {
		return -1;
	}
}

// Sort numbers in descending order:
numbersArray.sort(compareNumbers);
console.log(numbersArray); // [62, 60, 58, 54, 54, 50]
