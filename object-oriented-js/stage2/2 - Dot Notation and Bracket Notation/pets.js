/*const ernie = {
	// There are 3 properties here:
    animal: 'dog', // This is a key-value pair.
    age: '1',
    breed: 'pug',
    // Here's a method:
    bark: function(){
        console.log('Woof!');
    } // Call this using bark()
}*/

const ernie = {
    animal: 'dog',
    age: '1',
    breed: 'pug',
    bark: function(){
        console.log('Woof!');
    } 
}

// ernie.age = '2';
ernie['age'] = '2';

ernie.color = 'black';
console.log(ernie); /* { animal: 'dog',
  age: '2',
  breed: 'pug',
  bark: [Function: bark],
  color: 'black' } */



// Important vocab: encapsulation - one of the main principles with OOP - put all the inner workings of an object inside that object. 

// To implement encapsulation in JavaScript, we have to define the core methods and properties on that object.

/*
console.log(ernie.age); // 1
console.log(ernie.breed); // pug

ernie.bark(); // Woof!
*/

/*
console.log(ernie['age']); // 1
console.log(ernie['breed']); // pug
ernie['bark'](); // Woof!

var prop = 'breed';
console.log(ernie[prop]); // pug
*/