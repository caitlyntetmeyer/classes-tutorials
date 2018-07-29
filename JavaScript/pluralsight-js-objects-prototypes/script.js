'use strict';

function Cat(name, color) {
	this.name = name
	this.color = color
}
Cat.prototype.age = 4

var fluffy = new Cat('Fluffy', 'White')
var muffin = new Cat('Muffin', 'Brown')

fluffy.age = 5

display(fluffy.age) // 5
display(fluffy.__proto__.age) // 4

display(fluffy.hasOwnProperty('age')) // true


// function's prototype - the object instance that'll become the prototype for all objects created using this function as a constructor

// object's prototype - the object instance from which the object is inherited
