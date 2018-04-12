function init() {
// Use the document to get access to the DOM. Grab the element with the id of "greenplanet". Assign it to var planet:
var planet = document.getElementById("greenplanet");

// Use the innerHTML property of the element object to change the content of the element:
planet.innerHTML = "Red Alert: hit by phaser fire!";
// So that paragraph on the page now reads, "Red Alert: hit by phaser fire!"
}

window.onload = init;