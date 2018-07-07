class Pet {
	constructor(animal, age, breed, sound) {
		this.animal = animal;
		this.age = age;
		this.breed = breed;
		this.sound = sound;
	}

	speak() {
		console.log(this.sound);
	}

}

const ernie = new Pet('dog', 1, 'pug', 'yip yip');
const vera = new Pet('dog', 8, "Border Collie", 'woof woof');
const scofield = new Pet('dog', 6, "Doberman", 'Woof Woof');
const edel = new Pet('dog', 7, "German Shorthaired Pointer", 'woof');

// console.log(ernie); // Pet { animal: 'dog', age: 1, breed: 'pug' }

ernie.speak(); // yip yip
vera.speak(); // woof woof

/*
Exercise:

class Student {
	constructor(gpa) {
		this.gpa = gpa;
	}
}
*/

/*
Exercise:

class Student {
    constructor(gpa){
        this.gpa = gpa;
    }
  	
  	stringGPA() {
      return this.gpa.toString();
    }
}

const student = new Student(3.9);
*/