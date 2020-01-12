///////////////////////////////////////
// Lecture: Hoisting

// functions
calculateAge(1965); // You can call a function before you declare it
function calculateAge(year) {
    console.log(2016 - year);
}

// retirement(1956);
var retirement = function(year) { // You cannot call function expression before you declare it
    console.log(65 - (2016 - year));
}

// variables
console.log(age); // Undefined: You cannot call variables before you declare them
var age = 23;

function foo() {
    console.log(age); // Undefined: You cannot call variables before you declare them, nor do functions inherit global variables
    var age = 65;
    console.log(age); // prints from inside scope
}

foo();
console.log(age); // prints from outside/global scope