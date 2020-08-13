// Function
var john = {
    name: 'John',
    yearOfBirth: '1990',
    job: 'teacher'
}

// Function Constructor
var Person = function(name, yearOfBirth, job) {
    this.name = name
    this.yearOfBirth = yearOfBirth
    this.job = job
}

// Prototypal Inheritance
Person.prototype.calculateAge = function() {
    console.log(2020 - this.yearOfBirth)
}

Person.prototype.lastName = 'Smith'

// Instantiation
var john = new Person('John', 1990, 'teacher')
john.calculateAge()  // 30
console.log(john.lastName) // Smith

var jane = new Person('Jane', 1970, 'designer')
john.calculateAge()  // 50
console.log(jane.lastName) // Smith

var mark = new Person('Mark', 1950, 'retired')
john.calculateAge()  // 70
console.log(mark.lastName) // Smith

// Object.create
var personProto = {
    calculateAge: function() {
        console.log(2020 - this.yearOfBirth)
    }
}

var james = Object.create(personProto)
james.name = 'James'
james.yearOfBirth = '1990'
james.job = 'teacher'

var jana = Object.create(personProto,
    {
        name: {value: 'Jana'},
        yearOfBirth: {value: 1970},
        job: {value: 'designer'}
    }
)

// Primitives
var a = 23
var b = a
a = 46
console.log(a) // 46
console.log(b) // 23

// Objects
var obj1 = {
    name: 'John',
    age: 26
}

var obj2 = obj1
obj1.age = 30
console.log(obj1.age) // 30
console.log(obj2.age) // 30

// Functions
var age = 27
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
}

function change(a, b) {
    a = 30
    b.city = 'San Francisco'
}

change(age, obj)
console.log(age) // 30
console.log(obj.city) // San Francisco 

// Passing functions as arguments
var years = [1990, 1965, 1937, 2005, 1998]

function arrayCalc(arr, fn) {
    var arrRes = []
    for(var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]))
    }
    return arrRes
}

function calculateAge(el) {
    return 2020 - el
}

function isFullAge(el) {
    return el >= 18
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el))
    } else {
        return -1
    }
}

var ages = arrayCalc(years, calculateAge)
console.log(ages) // [26, 51, 79, 11, 18]

var fullAges = arrayCalc(ages, isFullAge)
console.log(fullAges) // [true, true, true, false, true]

var rates = arrayCalc(ages, maxHeartRate)
console.log(rates) // [187, 170, -1, -1, 192]

// Functions returning functions

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?')
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?')
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?')
        }
    }
}

var teacherQuestion = interviewQuestion('teacher')
teacherQuestion('John') // What subject do you teach, John?

var designerQuestion = interviewQuestion('designer')
designerQuestion('James') // James, can you please explain what UX design is?

var otherQuestion = interviewQuestion('doctor')
otherQuestion('Joe') // Hello Joe, what do you do?

// Returns function within function
interviewQuestion('teacher')('Mark') // What subject do you teach, John?

// Immediately Invoked Function Expressions (IIFE)

function game() {
    var score = Math.random() * 10
    console.log(score => 5)
}

game()

// IIFE
(function () {
    var score = Math.random() * 10
    console.log(score => 5)
})()

// IIFE with an arguement
(function (goodLuck) {
    var score = Math.random() * 10
    console.log(score => 5 - goodLuck)
})(5)