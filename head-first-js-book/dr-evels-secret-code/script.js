// Get the HTML element that has an id of "code9":
var access = document.getElementById("code9");

// Take the variable "access" (from above) and get its content by using its "innerHTML" property. Assign that content to the variable "code":
var code = access.innerHTML; // "code" now equals "My watch stopped at" because of this line of HTML: <p id="code9">My watch stopped at</p>

// Add " midnight" to the end of the string contained in "code" from above:
code = code + " midnight";

// Put up an alert to display the code:
alert(code); // My watch stopped at midnight