// Take a phone number of the form "123-4567" and write code to accept or reject it. To be accepted, the number should have 7 digits, 0 through 9, with a dash in the middle.

// Larry's Way:
function validate(phoneNumber) {
	if (phoneNumber.length !== 8) { // The string should have 8 characters.
		return false;
		}
		for (var i = 0; i < phoneNumber.length; i++) {
			if (i === 3) { // Look at index 3...
				if (phoneNumber.charAt(i) !== '-') { // ...and it should be a dash.
				return false;
			}
		} else if (isNaN(phoneNumber.charAt(i))) { // All the other characters should be numbers.
			return false;
		}
	}
	return true;
}

// Brad's Way:
function validate(phoneNumber) {
	if (phoneNumber.length !== 8) {
		return false;
	}
	var first = phoneNumber.substring(0,3); // Create a string containing 3 characters, from index 0-2.
	var second = phoneNumber.substring(4); // Create a string that starts at index 4 and goes to the end of the string.
	if (phoneNumber.charAt(3) !== "-" || isNaN(first) || isNaN(second)) { // If index 3 is NOT a dash, or the first 3 numbers are NOT a number, or the last 4 numbers are NOT a number, return false.
		return false;
	}
	return true;
}

// Now make the dash optional!

// Larry's Way:
function validate(phoneNumber) {
	if (phoneNumber.length > 8 ||
			phoneNumber.length < 7) { 
		return false;
		}
		for (var i = 0; i < phoneNumber.length; i++) {
			if (i === 3) { 
				if (phoneNumber.length === 8 && 
						phoneNumber.charAt(i) !== '-') {
				return false;
			}
		} else if (phoneNumber.length === 7 && 
					   isNaN(phoneNumber.charAt(i))) { 
			return false;
		}
	} else if (isNaN(phoneNumber.charAt(i))) {
		return false;
	}
	return true;
}

// Brad's Way:
function validate(phoneNumber) {
	if (phoneNumber.length > 8 ||
		phoneNumber.length < 7) {
		return false;
	}
	var first = phoneNumber.substring(0, 3);
	var second = phoneNumber.substring(phoneNumber.length - 4);

	if (isNaN(first) || isNaN(second)) {
		return false;
	}
	if (phoneNumber.length === 8) {
		return (phoneNumber.charAt(3) === "-");
	}
	return true;
}

// Use the split method. (This is my attempt.)

var phoneNumber = "123-4567";
var vals = phoneNumber.split("-");

if ( vals.length == 6) {
	for (var i = 0; i < vals.length; i++) {
		if (isNaN(i)) {
			return false;
		}
		return true;
	}
}










