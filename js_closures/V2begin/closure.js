var birds = 3;

// Outer function:
function dogHouse() {
	var dogs = 8;
	// Inner function:
	function showDogs() {

	}
	return showDogs;
}

var getDogs = dogHouse();

getDogs(); // 8

/*

Here's what a closure looks like:

function outerFunction() {
	var someCount = 0;
	function innerFunction() {
		someCount++;
		console.log("Called " + someCount + " times");
	}
	return innerFunction;
}

counter1 = outerFunction();
counter2 = outerFunction();
counter1(); // Called 1 times
counter2(); // Called 1 times

*/
