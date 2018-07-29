'use strict';

var cat = {
	name: {first:'Fluffy', last: 'LaBeouf'},
	color: 'White',
}

delete cat.name 

display(cat.name) // undefined