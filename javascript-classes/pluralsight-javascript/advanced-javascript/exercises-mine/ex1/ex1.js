// Correct Answer (my attempt at bottom):
(function(){

	function C() {
		console.log("OOPS!");
	}

	function E(f) {
		console.log("E");
		f();
		var f = F;
	}

	function A() {
		console.log("A");
		B();
	}

	var C;

	function G() {
		console.log("G");
		H();

		function H() {
			console.log("H");
			I();
		};
	}

	var D = d;

	function d() {
		console.log("D");
		E(F);
	}

	function I() {
		console.log("I");
		J();
		J();
	}

	function B() {
		console.log("B");
		C();
	}

	var F = function() {
		console.log("F");
		G();
	};

	var rest = "KLMNOPQRSTUVWXYZ".split(""), obj = {};
	for (var i=0; i<rest.length; i++) {
		(function(i){
			// define the current function
			obj[rest[i]] = function() {
				console.log(rest[i]);
				if (i < (rest.length-1)) {
					// TODO: call the next function
					obj[rest[i+1]]();
				}
			};
		})(i);
	}

	var J = function() {
		J = function() {
			console.log("J");
			obj.K();
		};
	};

	function C() {
		console.log("C");
		D();
	}

	return A;

})()();


// My Attempt:

// function A() {
// 	console.log("A");
// 	B();
// }

// function B() {
// 	console.log("B");
// 	C();
// }

// function C() {
// 	console.log("C");
// 	D();
// }

// function D() {
// 	console.log("D");
// 	E();
// }

// function E() {
// 	console.log("E");
// 	F();
// }

// function F() {
// 	console.log("F");
// 	G();
// }

// function G() {
// 	console.log("G");
// 	H();
// }	

// function H() {
// 	console.log("H");
// 	I();
// }

// function I() {
// 	console.log("I");
// 	J();
// }

// function J() {
// 	console.log("J");

// }

// function rest() {
// 	"KLMNOPQRSTUVWXYZ".split("");
// }

// for (var i=0; i<rest.length; i++) {
// 	(function(i){
// 		// define the current function
// 		window[rest[i]] = function() {
// 			console.log(rest[i]);
// 			if (i < (rest.length-1)) {
// 				// TODO: call the next function
// 				A(); 


// 			}
// 		};
// 	})(i);
// }