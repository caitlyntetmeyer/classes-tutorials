// 1: Set the text of the <h1> element
const h1 = document.getElementById('h1');
h1.textContent = "A List of Fun Things I Want To Do";

// 2: Set the color of the <h1> to a different color
h1.style.color = "slateblue";

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
const pDesc = document.querySelector('p.desc');
pDesc.innerHTML = "This will be <em>great!</em>";

// 4: Set the class of the <ul> to 'list'
const ul = document.getElementsByTagName('ul')[0];
ul.className = 'list';

// 5: Create a new list item and add it to the <ul>
const item = document.createElement('li');
item.innerHTML = "<input> Eat ice cream";
ul.appendChild(item);

// 6: Change all <input> elements from text fields to checkboxes
const input = document.querySelectorAll('input');
for (let i = 0; i < input.length; i++) {
	input[i].type = "checkbox";
}

// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>
const deleteButton = document.createElement('button');
deleteButton.textContent = "Delete";
const extraDiv = document.querySelector('.extra');
extraDiv.appendChild(deleteButton);

// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
deleteButton.addEventListener('click', () => {
	const button = document.querySelector('button');
	const container = document.querySelector('.container');
	container.removeChild(extraDiv);
});
















