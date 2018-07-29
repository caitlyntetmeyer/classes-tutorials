'use strict';

var arr = new Array('red', 'blue', 'green')

Object.defineProperty(Array.prototype, 'last', {get: function() {
	return this[this.length-1]
}})
var last = arr.last
var arr2 = ['one', 'two', 'three']
display(Array) // function Array() { [native code] }