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

/////////////////////////////////////
// Lecture: Scoping


// First scoping example
var a = 'Hello!'; // global var
first();

function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        console.log(a + b + c); // all in scope
    }
}

// Example to show the differece between execution stack and scope chain
var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    //console.log(c); => undefined
    console.log(a+d); // all in scope
}

/////////////////////////////////////
// Lecture: The this keyword


//console.log(this); => shows data from window aka browser object
calculateAge(1985);
function calculateAge(year) {
    console.log(2016 - year);
    console.log(this); // => shows data from window aka browser object
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this); // Object {name: 'John', yearOfBirth: 1990}
        console.log(2016 - this.yearOfBirth); // 26
        
        function innerFunction() {
            console.log(this); // => shows data from window aka browser object
        }
        innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge; // Method Borrowing
mike.calculateAge(); // 32
