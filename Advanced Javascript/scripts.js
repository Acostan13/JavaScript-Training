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
