class Pet {
	constructor(animal, age, breed) {
		this.animal = animal;
		this.age = age;
		this.breed = breed;
	}
}

const ernie = new Pet('dog', 1, 'pug');
const vera = new Pet('dog', 8, "Border Collie");
const scofield = new Pet('dog', 6, "Doberman");
const edel = new Pet('dog', 7, "German Shorthaired Pointer");

console.log(ernie); // Pet { animal: 'dog', age: 1, breed: 'pug' }

/*
Exercise:

class Student {
	constructor(gpa) {
		this.gpa = gpa;
	}
}
*/