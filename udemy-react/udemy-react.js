/*

React 16+ on Udemy

https://www.udemy.com/react-the-complete-guide-incl-redux 

---

Understanding "let" and "const":

https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/t/lecture/8211784?start=0

"let" is the new "var". It's for variable values. 
Use "const" if you plan on creating a _constant_ value.

---

Arrow Functions:

https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/t/lecture/8211786?start=0

Regular Syntax:

const myFnc = () => {
    ...
}

^^No more issues with the "this" keyword!

Ex:
*/
const printMyName = (name) => {
    console.log(name);
}
printMyName('Max');     // "Max" 

// If exactly 1 argument, can omit () around "name" argument (1st line):
const printMyName = name => {
    console.log(name);
}
printMyName('Max');     // "Max" 

// An alternative regarding the function body, if you're only returning sth:
const multiply = (number) => {
    return number * 2;
}
console.log(multiply(2));       // 4

// Additional shortening possibility, if exactly 1 argument AND only returning sth AND :
const multiply = number => number * 2;  // no () around "number" AND no "return" keyword AND everything on one line
console.log(multiply(2));   // 4

/*

---

Exports & Imports (Modules):

https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/t/lecture/8211788?start=0

Ex. 1 - In 1st file, person.js:
*/
const person = {
    name: 'Max'
}
// "default" keyword means, "If you export something from this file, it should be this thing":
export default person

// Ex. 1 - In 2nd file, utility.js:
export const baseData = 10;
export const clean = () => {...}

// Ex. 1 - in 3rd file, app.js:
import person from './person.js' // or "import prs from './person.js'" - it's up to you what you name the default

// Still in 3rd file - _named_ exports (you must use the exact name, between curly braces):
import {baseData} from './utility.js'
import {clean} from './utility.js'  
// Alternatively, you could create an _alias_ using the "as" keyword:
import {clean as Clean} from './utility.js'
// Still alternatively, you could use an asterisk with "as bundled":
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
person.printMyName; // "Max"

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
