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
	}
};


// Test:
model.fire("53");

model.fire("06");
model.fire("16");
























