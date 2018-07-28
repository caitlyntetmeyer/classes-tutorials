'use strict';

// function Cat(name, color) {
// 	this.name = name
// 	this.color = color
// }
// // new creates a new empty JS object
// var cat = new Cat('Fluffy', 'White');

var cat = Object.create(Object.prototype,
{
	name: {
		value: 'Fluffy',
		enumerable:true,
		writable:true,
		configurable:true
	},
	color: {
		value:'White',
		enumerable:true,
		writable:true,
		configurable: true
	}
})

display(cat)


