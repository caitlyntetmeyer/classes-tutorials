function lieDetectorTest() {
	var lies = 0;

	var stolenDiamond = { };
	if (stolenDiamond) { // true because it's not an empty string
		console.log("You stole the diamond");
		lies++;
	}
	var car = {
		keysInPocket: null
	};
	if (car.keysInPocket) { // false because of null
		console.log("Uh oh, guess you stole the car!");
		lies++;
	}
	if (car.emptyGasTank) { // false because that doesn't exist
		console.log("You drove the car after you stole it!");
		lies++
	}
	var foundYouAtTheCrimeScene = [ ];
	if (foundYouAtTheCrimeScene) { // true because it's not an empty string
		console.log("A sure sign of guilt");
		lies++;
	}
	if (foundYouAtTheCrimeScene[0]) { // false because that doesn't exist
		console.log("Caught with a stolen item!");
		lies++
	}
	var yourName = " ";
	if (yourName) { // true because the string has a space in it
		console.log("Guess you lied about your name");
		lies++;
	}
	return lies;
}
var numberOfLies = lieDetectorTest(); 
console.log("You told " + numberOfLies + " lies!"); // You told 3 lies!
if (numberOfLies >= 3) {
	console.log("Guilty as charged"); // Guilty as charged
}
