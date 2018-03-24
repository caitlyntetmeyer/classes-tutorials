// Chapter 5: Understanding Objects:

var car = {
	make: "Chevy",
	model: "Bel Air",
	year: 1957,
	color: "red",
	passengers: 2,
	convertible: false,
	mileage: 1021,
	fogLights: true,
	owner: "Caitlyn"
};

var taxi = {
	make: "Hyundai",
	model: "Accent",
	year: 2010,
	color: "yellow",
	passengers: 4,
	convertible: false,
	mileage: 110987,
	fogLights: true,
	owner: "Ms. Tetmeyer",
	expensive: true	
};

var cadi = {
	make: "GM",
	model: "Cadillac",
	year: 1955,
	color: "tan",
	passengers: 5,
	convertible: false,
	mileage: 12892,
	fogLights: true,
	owner: "Candace",
	expensive: true
};

console.log(cadi);

//  Object Magnets exercise, p. 183:
var dog = {
	name: "Fido",
	weight: 20.2,
	age: 4,
	breed: "mixed",
	activity: "fetch balls"
};
var bark;
if (dog.weight > 20) {
	bark = "WOOF WOOF";
} else {
	bark = "woof woof";
}
var speak = dog.name + " says, \"" + bark + ",\" when he wants to " + dog.activity + ".";
console.log(speak); // Fido says, "WOOF WOOF," when he wants to fetch balls.




























