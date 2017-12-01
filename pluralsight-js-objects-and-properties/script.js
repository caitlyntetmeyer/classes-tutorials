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

// var arr = ['red', 'blue', 'green']

// Object.defineProperty(arr, 'last', {get: function() {
//   return this[this.length-1]
// }})
// var last = arr.last
// display(last)

var arr = ['red', 'blue', 'green']

Object.defineProperty(Array.prototype, 'last', {get: function() {
  return this[this.length-1]
}})
var last = arr.last
var arr2 = ['one', 'two', 'three']
display(arr.last);
display(arr2.last);