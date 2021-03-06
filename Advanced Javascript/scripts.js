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
jane.calculateAge()  // 50
console.log(jane.lastName) // Smith

var mark = new Person('Mark', 1950, 'retired')
mark.calculateAge()  // 70
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

// Closures

function retirement(retirementAge) {
    var a = ' years left until retirement.'
    return function(yearOfBirth) {
        var age = 2020 - yearOfBirth
        console.log((retirementAge - age) + a)
    }
}

var retirementUS = retirement(66)
var retirementGermany = retirement(65)
var retirementIceland = retirement(67)

retirementUS(1990) // 36 years left until retirement.
retirementGermany(1990) // 35 years left until retirement.
retirementIceland(1990) // 37 years left until retirement.

retirement(66)(1990) // 36 years left until retirement.

// Challenge
function interviewQuestion(job) {
    return function(name) {
      if(job === 'designer') {
        console.log(name + ', can you please explain what UX design is?')
      } else if (job == 'teacher') {
        console.log('What subject do you teach, ' + name + '?')
      } else {
        console.log('Hello ' + name + ', what do you do?')
      }
    }
}
  
interviewQuestion('designer')('John')
interviewQuestion('teacher')('James')
interviewQuestion('other')('Jana')

// Bind, Call, and Apply

var john = {
    name: 'John',
    age: 28,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ' Ladies & Gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.')
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' +  timeOfDay)
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

john.presentation('formal', 'morning')

// Method Borrowing
// Use call method when you have 1 or more arguments to pass
john.presentation.call(emily, 'friendly', 'afternoon')

// Use apply method when you want to pass an array of arguments
john.presentation.apply(emily, ['friendly', 'afternoon'])

// Use bind method when you want to preset arguments, aka currying => create a function based on another function with preset parameters
var johnFriendly = john.presentation.bind(john, 'friendly')
johnFriendly('morning')
johnFriendly('night')

var emilyFormal = john.presentation.bind(emily, 'formal')
emilyFormal('afternoon')
emilyFormal('night')

// Challenge
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

function isFullAge(limit, el) {
    return el >= limit
}

var ages = arrayCalc(years, calculateAge)
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20))
console.log(ages) // var years = [1990, 1965, 1937, 2005, 1998]

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

function isFullAge(limit, el) {
    return el >= limit
}

var ages = arrayCalc(years, calculateAge)
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20))
console.log(ages) // [30, 55, 83, 15, 12]
console.log(fullJapan) // [true, true, true, false, true]


// Coding Challenge
