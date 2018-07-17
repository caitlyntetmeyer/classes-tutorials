const myList = document.getElementsByTagName('li');

// Turn the li's purple:
for (let i = 0; i < myList.length; i++) {
	myList[i].style.color = 'purple';
}

const errorNotPurple = document.querySelectorAll('.error-not-purple');

for (let i = 0; i < errorNotPurple.length; i++) {
	errorNotPurple[i].style.color = 'red';
}

const evens = document.querySelectorAll('li:nth-child(odd)');

for (let i = 0; i < evens.length; i++) {
	evens[i].style.backgroundColor = 'lightgray';
}

/*

In Console:

const myList = document.getElementsByTagName('li');
	undefined
myList[2].style.color = 'purple';
	"purple"

*/

/*

const myHeading = document.getElementsByTagName('h1')[0];
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');

// Click event handler:
myButton.addEventListener('click', () => {
	myHeading.style.color = myTextInput.value;
});

*/

/*

In the console, turn the paragraph blue:

const myParagraph = document.getElementsByTagName('p');
	undefined

myParagraph.length;
	1

myParagraph[0];
	<p>​Making a web page interactive​</p>​

myParagraph[0].style.color = 'blue';
	"blue"

*/