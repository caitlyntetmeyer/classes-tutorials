var numbersArray = [60, 50, 62, 58, 54, 54];

// Sort numbers in ascending order
function compareNumbers(num1, num2) {
	/*
	if (num1 > num2) {
		return 1;
	} else if (num1 === num2) {
		return 0;
	} else {
		return -1;
	}
	*/
	return num1 - num2;
}

// Call the sort method on numbersArray and pass it the function
numbersArray.sort(compareNumbers);

console.log(numbersArray); // [50, 54, 54, 58, 60, 62]


// Write a new function for descending order
function compareNumbersDesc(num1, num2) {
	return num2 - num1;
}

numbersArray.sort(compareNumbersDesc);

console.log(numbersArray); // [62, 60, 58, 54, 54, 50]