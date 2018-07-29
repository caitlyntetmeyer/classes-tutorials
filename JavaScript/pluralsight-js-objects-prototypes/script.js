'use strict';
// enumerable means we can loop over them using a for in loop
var cat = {
	name: {first:'Fluffy', last: 'LaBeouf'},
	color: 'White',
}

Object.defineProperty(cat, 'name', {enumerable: false})

