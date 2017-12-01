'use strict';

// var cat = {
//   name: {first: 'Fluffy', last: 'LaBeouf'},
//   color: 'White'
// }

// Object.defineProperty(cat, 'fullName',
//   {
//     get: function() {
//       return this.name.first + ' ' + this.name.last
//     },
//     set: function(value) {
//       var nameParts = value.split(' ')
//       this.name.first = nameParts[0]
//       this.name.last = nameParts[1]
//     }
//   })
  
//   cat.fullName = 'Muffin Top'
//   display(cat.fullName)
//   display(cat.name.first)
//   display(cat.name.last)

// ---

// var arr = ['red', 'blue', 'green']
// Object.defineProperty(arr, 'last', {get: function() {
//   return this[this.length-1]
// }})
// var last = arr.last
// display(last)

// ---

// var arr = ['red', 'blue', 'green']
// // This works the same: var arr = new Array('red', 'blue', 'green')

// Object.defineProperty(Array.prototype, 'last', {get: function() {
//   return this[this.length-1]
// }})
// var last = arr.last
// var arr2 = ['one', 'two', 'three']
// display(arr.last);  // green
// display(arr2.last); // three

// ---

// var myFunc = function() {}
// display(myFunc.prototype)

// var cat = {name: 'Fluffy'}
// display(cat.prototype)  // {}

// ---

function Cat(name, color) {
  this.name = name
  this.color = color
}
var fluffy = new Cat("Fluffy", "White")

Cat.prototype.age = 3

display(Cat.prototype)
/* Cat {
  age: 3
} */
display(fluffy.__proto__)
/* Cat {
  age: 3
} */

var muffin = new Cat("Muffin", "Brown")

display(muffin.__proto__)
/* Cat {
  age: 3
} */



























