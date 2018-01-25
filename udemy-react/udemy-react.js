/*

React 16+ on Udemy

https://www.udemy.com/react-the-complete-guide-incl-redux 

---

Understanding "let" and "const":

https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/t/lecture/8211784?start=0

"let" is the new "var". It's for variable values. 
Use "const" if you plan on creating a _constant_ value.
*/

let myName = 'Max';
console.log(myName); // "Max"

myName = 'Manu';
console.log(myName); // "Manu"

/* The above doesn't work with "const" because "const" can't be changed!

---

Arrow Functions:

https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/t/lecture/8211786?start=0

Regular Function Syntax: */
function myFnc() {
  console.log("foo");
}

// Arrow Function Syntax:

const myFnc = () => {
    console.log("foo");     // No more issues with the "this" keyword!
  }

// Ex:
const printMyName = (name) => {
  console.log(name);
}
printMyName('Max');     // "Max" 

// If exactly 1 argument, can omit () around "name" argument (1st line):
const printMyName = name => {
  console.log(name);
}
printMyName('Max');     // "Max" 

// If no arguments, do empty parentheses: const foo = () => {...}

// Here, all you're doing is returning sth:
const multiply = (number) => {
  return number * 2;
}
console.log(multiply(2));       // 4

// Additional shortening possibility, if exactly 1 argument AND you're only returning sth:
const multiply = number => number * 2;  // no () around "number" AND no "return" keyword AND everything on one line
console.log(multiply(2));   // 4

/*

---

Exports & Imports (Modules):

https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/t/lecture/8211788?start=0

In 1st file, person.js:
*/
const person = {
  name: 'Max'
}
// "default" keyword means, "If you export something from this file, it should be this thing":
export default person

// In 2nd file, utility.js:
export const clean = () => {...}

export const baseData = 10;

// In 3rd file, app.js - import from person.js:
import person from './person.js' // or "import prs from './person.js'" - it's up to you what you name the default

// Import NAMED exports from utility.js (you must use the EXACT name between curly braces):
import {baseData} from './utility.js'

import {clean} from './utility.js'  

// Alternatively, you could create an _alias_ using the "as" keyword:
import {clean as Clean} from './utility.js'

// Still alternatively, you could use an asterisk to mean all of 'em together, with "as" and an alias such as "bundled":
import * as bundled from './utility.js'

/*

Understanding Classes:

https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/t/lecture/8211788?start=0

Classes are blueprints for objects!

Classes are declared using the "class" keyword.

Like this: */
class Person {
    name = 'Max'    // property (a variable attached to a class)
    call = () => {...}  // method (a function attached to a class)
  }

// Usage of classes:
const myPerson = new Person() // Instantiate a class with the "new" keyword.
myPerson.call()
console.log(myPerson.name)

// Classes support _inheritance_ with the "extends" keyword:
class Person extends Master



// Class Example:
class Person {
  constructor() {
    this.name = 'Max';
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName(); // "Max"



// Classes can also inherit, as in this example:
class Human {   // the super constructor
  constructor() {
    this.gender = 'male';
  } 
  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {  // Person will now inherit from Human.
  constructor() {
    super(); // MUST HAVE this super() method, so that the parent constructor "Human" will get executed.
    this.name = 'Max';
  }
  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName(); // "Max"
person.printGender(); // "male"

  // Classes are one of two ways in React to create components.

  /*

  Classes, Properties, and Methods:

  https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/t/lecture/8211792?start=0

  Properties are like variables attached to classes and objects.
  Methods are like functions attached to classes and objects.
---
  Properties -
  In ES6, this is the syntax for assigning properties: */
  constructor() {
    this.myProperty = 'value'
  }

  // ...but in ES7, you can assign properties directly within a class, like this:
  myProperty = 'value'  // No constructor call needed!
/* ---
Methods -
In ES6, this is the syntax for methods: */
myMethod() {...}

// ... but in ES7, you can do this for methods:
myMethod = () => {...} // By using an arrow function as a property value, you have no problems w/a "this" keyword!

// So let's improve the Human example from above:
class Human {  
  gender = 'male';
  printGender = () => {
    console.log(this.gender);
  }
}

class Person extends Human {
  name = 'Max';
  gender = 'male';

  printMyName = () => {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName(); // "Max"
person.printGender(); // "male"

/* 

Spread and Rest Operators:

https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/t/lecture/8211796?start=0

The spread and rest operators are just three dots, like this: ...

spread operators - used to split up:
1) array elements, OR 
2) object properties

Let's say we want to pull in old elements to a new array, and also add more elements to the new array: */
const newArray = [...oldArray, 1, 2]    // Literally three dots are used to pull in the old elements.

// Let's say we want to make a new object that pulls in all the properties of an old object and also adds a new property:
const newObject = {...oldObject, newProp: 5}    // pulls in the old object and then adds a new property, newProp

// rest operators - used to merge a list of _function arguments_ into an _array_:
function sortArgs(...args) {    // The rest operator pulls in function arguments and puts them into an array.
  return args.sort()
}

// Spread Operator with Array Elements:
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];     // "...numbers" pulls in the elements of the numbers array. Then we add a new number, 4.

console.log(newNumbers);    // [1, 2, 3, 4]

// Spread Operator with Objects:
const person = {
    name: 'Max'     // assigns a name to the "person" object
  };
  
  const newPerson = {
    ...person,  // pulls in the name of the old person
    age: 28     // adds an age to the new person
  }
  
  console.log(newPerson);   /* Result:
  [object Object] {
    age: 28,
    name: "Max"
  }
  */

  // Rest Operator (used less often):
  const filter = (...args) => {
    return args.filter(element => element === 1);
  }
  
  console.log(filter(1, 2, 3));     // [1]

  /*

  Destructuring:

  https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/t/lecture/8211798?start=0

  Destructuring lets you easily extract array elements or object properties and store them in variables.
  Lets you pull out single elements/properties and store them in variables.

  Array Destructuring: */
  [a, b] = ['Hello', 'Max']
  console.log(a)    // Hello
  console.log(b)    // Max

  // Object Destructuring:
  {name} = {name: 'Max', age: 28}   // pulls out the name only, not the age
  console.log(name)     // Max
  console.log(age)      // undefined

  // Array Destructuring Example:
  const numbers = [1, 2, 3];
  [num1, num2] = numbers;
  console.log(num1, num2); 
  /* 
  1
  2 
  */

  // If you want to bring out the 3 instead, and not the 2:
  const numbers = [1, 2, 3];
  [num1, , num3] = numbers;     // Notice the empty space where num2 would have gone.
  console.log(num1, num3);
  /*
  1
  3
  */

// https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/t/lecture/8211800?start=0: 

// Example 1:

const person = {
  name: 'Max'
};

const secondPerson = person; // "copies" Max

console.log(secondPerson);
/* 
[object Object] {
  name: "Max"
} 
*/

// Example 2:

const person = {
  name: 'Max'
};

const secondPerson = person;

person.name = 'Manu'; // "erases" Max

console.log(secondPerson);
/*
[object Object] {
  name: "Manu"
}
*/

// Example 3 (best way?):

const person = {
  name: 'Max'
};

const secondPerson = {
  ...person
}; // creates a "real" copy of the properties, and not the entire object

person.name = 'Manu';
console.log(secondPerson);
/*
[object Object] {
  name: "Max"
}
*/

// Refreshing Array Functions - https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/t/lecture/8211802?start=0:

const numbers = [1, 2, 3];


