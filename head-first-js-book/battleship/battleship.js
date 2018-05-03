// View:

var view = {
	// This method takes a string message and displays it in the message display area.
	displayMessage: function(msg) {
		// Get the messageArea element from the page:
		var messageArea = document.getElementById("messageArea");
		// Update the text of the messageArea element by setting its innerHTML to msg:
		messageArea.innerHTML = msg;
	},
		displayHit: function(location) {
		// If the user guesses a location where there is a battleship, display battleship image
		// Get the element by its id, which matches the location:
		var cell = document.getElementById(location);
		// Set the class attribute of the element to hit:
		cell.setAttribute("class", "hit");
	},
	displayMiss: function(location) {
		// If the user guesses a location where there's no battleship, display MISS image
		var cell = document.getElementById(location);
		cell.setAttribute("class", "miss");
	}
};

view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");
view.displayMessage("Tap, tap, is this thing on?");


// Model:

var ships = [ 
	{ locations: ["06", "16", "26"], hits: ["hit", "hit", "hit"] },
	{ locations: ["24", "34", "44"], hits: ["hit", "hit", "hit"] },
	{ locations: ["10", "11", "12"], hits: ["hit", "hit", "hit"] }
];

// A6 - 06 - hit
// B3 - 13 - miss
// C4 - 24 - hit
// D1 - 31 - miss
// B0 - 10 - hit
// D4 - 34 - hit
// F0 - 50 - miss
// A1 - 01 - miss
// C6 - 26 - hit
// B1 - 11 - hit
// B2 - 12 - hit
// E4 - 44 - hit
// B6 - 16 - hit

















