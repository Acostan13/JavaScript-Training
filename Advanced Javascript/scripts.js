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