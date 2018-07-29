'use strict';

var cat = {
	name: {first:'Fluffy', last: 'LaBeouf'},
	color: 'White',
}
// Get full name of cat:
Object.defineProperty(cat, 'fullName',
{
	get: function() {
		return this.name.first + " " + this.name.last
	},
	set: function(value) {
		var nameParts = value.split(" ")
		this.name.first = nameParts[0]
		this.name.last = nameParts[1]
	}
})

cat.fullName = 'Muffin Top'
display(cat.fullName) // Muffin Top
display(cat.name.first) // Muffin
display(cat.name.last) // Top
