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

// view.displayMiss("00");
// view.displayHit("34");
// view.displayMiss("55");
// view.displayHit("12");
// view.displayMiss("25");
// view.displayHit("26");
// view.displayMessage("Tap, tap, is this thing on?");


// Model:

var model = {
	boardSize: 7,
	numShips: 3,
	shipLength: 3,
	shipsSunk: 0,

	ships: [ { locations: ["06", "16", "26"], hits: ["", "", ""] },
			 { locations: ["24", "34", "44"], hits: ["", "", ""] },
			 { locations: ["10", "11", "12"], hits: ["", "", ""] } ],

	// The fire method is what turns a player's guess into a hit or a miss. It takes a guess as an argument:
	fire: function(guess) {
	
		for (var i = 0; i < this.numShips; i++) {
			// For each ship...
			var ship = this.ships[i];
			// The indexOf method searches an array for a matching value and returns its index, or -1 if it can't find it:
			var index = ship.locations.indexOf(guess);
			if (index >= 0) {
				// We have a hit! So mark the hits array at the same index:
				ship.hits[index] = "hit";

				// Notify the view that we got a hit at the location in guess:
				view.displayHit(guess);
				// And ask the view to display the message "HIT!":
				view.displayMessage("HIT!");

				// If the ship is sunk, increase the number of ships that are sunk in the model's shipsSunk property:
				if (this.isSunk(ship)) {
					// Let the player know that this hit sank the battleship!
					view.displayMessage("You sank my battleship!");
					this.shipsSunk++;
				}

				// We need to return true because we had a hit:
				return true;
			}

		}
		// Notify the view that we got a miss at the location in guess:
		view.displayMiss(guess);
		// And ask the view to display the message "You missed":
		view.displayMessage("You missed.");
		// If we make it through all the ships and don't have a hit, it's a miss; so we return false:
		return false;
	},

		// This method iterates, creating ships, until it has filled the model's ships array with enough ships
		generateShipLocations: function() {
		var locations;
		// For each ship we want to generate locations for
		for (var i = 0; i < this.numShips; i++) {
			do {
				// We generate a new set of locations...
				locations = this.generateShip();
				// ...and check to see if those locations overlap with any existing ships on the board. If they do, then we need to try again. So keep generating new locations until there's no collision
			} while (this.collision(locations));
			// Once we have locations that work, we assign the locations to the ship's locations property in the model.ships array
			this.ships[i].locations = locations;
		}
	},

	generateShip: function() {
		// Use Math.random to generate a number between 0 and 1, and multiply the result by 2, to get a number between 0 and 2 (not including 2). Then turn that into a 0 or a 1 using Math.floor
		var direction = Math.floor(Math.random() * 2);
		var row;
		var col;
		// If the direction is 1, we'll create a horizontal ship
		if (direction === 1) {
			// Generate a starting location for a horizontal ship
			row = Math.floor(Math.random() * this.boardSize);
			col = Math.floor(Math.random() * (this.boardSize - (this.shipLength + 1)));

			// If the direction is 0, we'll create a vertical ship
		} else {
			// Generate a starting location for a vertical ship
			row = Math.floor(Math.random() * (this.boardSize - (this.shipLength + 1)));
			col = Math.floor(Math.random() * this.boardSize);
		}

		// For the new ship locations, we'll start with an empty array, and add the locations one by one
		var newShipLocations = [];
		// Loop for the number of locations in a ship
		for (var i = 0; i < this.shipLength; i++) {
			if (direction === 1) {
				// add new location to newShipLocations array for new horizontal ship each time through the loop
				newShipLocations.push(row + "" + (col + i));
			} else {
				// add new location to newShipLocations array for new vertical ship each time through the loop
				newShipLocations.push((row + i) + "" + col);
			}
		}
		// Once we've generated all the locations, we return the array
		return newShipLocations;
	},

	// Take a ship and return true if it's sunk and false if it's still floating:
	isSunk: function(ship) {
		for (var i = 0; i < this.shipLength; i++) {
			// If there's a location that doesn't have a hit, then the ship's still floating, so return false:
			if (ship.hits[i] !== "hit") {
				return false;
			}
		}
		// Otherwise, this ship is sunk! Return true:
		return true;
	},

	collision: function(locations) {
		for (var i = 0; i < this.numShips; i++) {
			var ship = model.ships[i];
			for (var j = 0; j < locations.length; j++) {
				if (ship.locations.indexOf(locations[j]) >= 0) {
					return true;
				}
			}
		}
		return false;
	}
};


// Test:
// model.fire("53");

// model.fire("06");
// model.fire("16");
// model.fire("26");

// model.fire("34");
// model.fire("24");
// model.fire("44");

// model.fire("12");
// model.fire("11");
// model.fire("10");


// The controller will get and process the player's guess, keep track of the number of guesses, ask the model to update itself based on the latest guess, and detect when the game is over (when all ships have been sunk).

// Controller:

var controller = {
	guesses: 0,

	// guess will have a form like "A0":
	processGuess: function(guess) {
		var location = parseGuess(guess);
		if (location) {
			this.guesses++;
			var hit = model.fire(location);
			if (hit && model.shipsSunk === model.numShips) {
				view.displayMessage("You sank all my battleships, in " + this.guesses + " guesses");
			}
		}
	}
};

function parseGuess(guess) {
	var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

	if (guess === null || guess.length !== 2) {
		alert("Oops, please enter a letter and a number on the board.");
	} else {
		// Grab the first character of the guess:
		var firstChar = guess.charAt(0);
		// Use indexOf to get back a number between 0 and 6 that corresponds to the letter:
		var row = alphabet.indexOf(firstChar);

		var column = guess.charAt(1);

		if (isNaN(row) || isNaN(column)) {
			alert("Oops, that isn't on the board.");
		} else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
			alert("Oops, that's off the board!");
		} else {
			return row + column;
		}
	}
	return null;

}

// console.log(parseGuess("A0"));
// console.log(parseGuess("B6"));
// console.log(parseGuess("G3"));
// console.log(parseGuess("H0"));
// console.log(parseGuess("A7"));

// controller.processGuess("A0");
// controller.processGuess("A6");
// controller.processGuess("B6");
// controller.processGuess("C6");
// controller.processGuess("C4");
// controller.processGuess("D4");
// controller.processGuess("E4");
// controller.processGuess("B0");
// controller.processGuess("B1");
// controller.processGuess("B2");

function init() {
	// click handler
	var fireButton = document.getElementById("fireButton");
	fireButton.onclick = handleFireButton;
	// key press handler
	var guessInput = document.getElementById("guessInput");
	guessInput.onkeypress = handleKeyPress;
}

function handleFireButton() {
	var guessInput = document.getElementById("guessInput");
	var guess = guessInput.value;
	controller.processGuess(guess);

	// Reset the form input element to be an empty string
	guessInput.value = "";	
}

function handleKeyPress(e) {
	var fireButton = document.getElementById("fireButton");
	// The Enter key has a keyCode of 13
	if (e.keyCode === 13) {
		fireButton.click();
		return false;
	}
}

window.onload = init;

















