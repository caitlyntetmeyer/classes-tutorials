// JavaScript Objects --> { "key": "value" };

var jim = { 
	name: "Jim", 
	skills: ["JavaScript", "Ruby", "Dancing"],
	"favorite color": "green"
};

console.log(jim.name); // Jim

// Rename jim:
jim.name = "James";
console.log(jim); // James

// Print skills:
console.log(jim.skills); // ["JavaScript", "Ruby", "Dancing"]

// Replace skills with Everything:
jim.skills = "Everything";
console.log(jim.skills); // Everything

console.log(jim["favorite color"]); // green

// Reassign favorite color:
jim["favorite color"] = "blue";
