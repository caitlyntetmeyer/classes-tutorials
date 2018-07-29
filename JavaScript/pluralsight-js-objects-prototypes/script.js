'use strict';

function Cat(name, color) {
	this.name = name
	this.color = color
}
var fluffy = new Cat('Fluffy', 'White')

Cat.prototype.age = 3

display(Cat.prototype) // Cat {age: 3}
display(fluffy.__proto__) // Cat {age: 3}

var muffin = new Cat('Muffin', 'Brown')

display(muffin.__proto__) // Cat {age: 3}


// function's prototype - the object instance that'll become the prototype for all objects created using this function as a constructor

// object's prototype - the object instance from which the object is inherited
