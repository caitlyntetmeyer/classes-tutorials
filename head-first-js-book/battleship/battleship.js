var view = {
	// This method takes a string message and displays it in the message display area.
	displayMessage: function(msg) {
		// Get the messageArea element from the page:
		var messageArea = document.getElementById("messageArea");
		// Update the text of the messageArea element by setting its innerHTML to msg:
		messageArea.innerHTML = msg;
	},
	displayMiss: function(location) {
		// If the user guesses a location where there's no battleship, display MISS image
	},
	displayHit: function(location) {
		// If the user guesses a location where there is a battleship, display battleship image
	}
};

