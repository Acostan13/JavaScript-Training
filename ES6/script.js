// let and const

// ES5
var nameES5 = "Jane Smith"
var age = 23
name = "Jane Miller"
console.log(nameES5) // Jane Miller

// ES6
const nameES6 = "Jane Smith"
let age = 23
nameES6 = "Jane Miller"
console.log(nameES6) // TypeError: Assignment to constant variable

// ES5 - function scoped
function driversLicenceES5(passedTest) {
  if (passedTest) {
    var firstName = "John"
    var yearOfBirth = 1990
  }
  console.log(
    firstName +
      ", born in " +
      yearOfBirth +
      ", is now officially allowed to drive a car."
  )
}

driversLicenceES5(true) // John, born in 1990, is now officially allowed to drive a car.

// ES6 - block scoped
function driversLicenceES6(passedTest) {
  let lastName

  if (passedTest) {
    let firstName = "John"
    const yearOfBirth = 1990
    lastName = "Smith"
  }
  console.log(
    firstName +
      ", born in " +
      yearOfBirth +
      ", is now officially allowed to drive a car."
  ) // Reference error
  console.log(lastName) // prints as intended
}

driversLicenceES6(true) // ReferrenceError: firstName is not defined

let i = 23

for (let i = 0; i < 5; i++) {
  console.log(i) // 0, 1, 2, 3, 4
}

console.log(i) // 23

// Blocks and IIFEs

// ES6
{
    const a = 1
    let b = 2
    var c = 3
}

console.log(a + b) // ReferenceError: a is not defined
console.log(c) // 3 => var is function scoped

// ES5
(function(){
    var c = 3
})()

console.log(c) // ReferenceError: c is not defined

// Strings

let firstName = 'John'
let lastName = 'Smith'
const yearOfBirth = 1990

function calcAge(year) {
    return 2020 - year
}

// ES5
console.log('This is' + firstName + ' ' + lastName + ' . he was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.') 

// ES6 Template Literals
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`)

const n = `${firstName} ${lastName}`
console.log(n.startsWith('J')) // True
console.log(n.startsWith('j')) // False
console.log(n.endsWith('th')) // True
console.log(n.endsWith('Sm')) // False
console.log(n.includes(' ')) // True
console.log(n.includes('oh')) // True
console.log(firstName.repeat(5)) // JohnJohnJohnJohnJohn
console.log(`${firstName} `.repeat(5)) // John John John John John

// Arrow Functions

const years = [1990, 1965, 1982, 1937]

// ES5
var agesES5 = years.map(function(el) {
  return 2020 - el
})

// ES6
let agesES6 = years.map(el => 2020 - el)

agesES6 = years.map((el, index) => `Age element ${index + 1}: ${2020 - el}.`)

agesES6 = years.map((el, index) => {
  const now = new Date().getFullYear()
  const age = now - el
  return `Age element ${index + 1}: ${age}.`
})

// ES5
var box5 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    var self = this
    document.querySelector('.green').addEventListener('click', function() {
      var str = 'This is box number ' + self.position + ' and it is ' + self.color
      alert(str)
    })
  } 
}
box5.clickMe() // This is box number 1 and it is green

// ES6
const box6 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    document.querySelector('.green').addEventListener('click', () => {
      var str = `This is box number ${position} and it is ${color}`
      alert(str)
    })
  } 
}
box6.clickMe() // This is box number 1 and it is green

function Person(name) {
  this.name = name
}

// ES5
Person.prototype.myFriends5 = function(friends) {
  
  var arr = friends.map(function(el) {
    return this.name + ' is friends with ' + el
  }.bind(this)) 
  console.log(arr)
}

// ES6
Person.prototype.myFriends5 = friends => {
  
  var arr = friends.map(el => {
    return `${name} is friends with ${el}`
  }) 
  console.log(arr)
}

var friends = ['Bob', 'Jane', 'Mark']
new Person('John').myFriends5(friends)

// Destructuring

// ES5
var john = ['John', 26]
var name = john[0]
var age = john[1]

// ES6
const [name, age] = ['John', 26]
console.log(name, age) // => John, 26

// ES5
const obj = {
  firstName: 'John',
  lastName: 'Smith'
}

// ES6
const {firstName, lastName} = obj
console.log(firstName, lastName) // => John, Smith

const {firstName: a, lastName: b} = obj
console.log(a) // => John
console.log(b) // => Smith


function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year
  return [age, 65 - age]
}

// Destructuring an array
const [age, retirement] = calcAgeRetirement(1990)
console.log(age, retirement) // => 30, 35

// Arrays in ES6

const boxes = document.querySelectorAll('.box')

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes)
boxesArr5.forEach(function(cur){
  cur.style.backgroundColor = 'dodgerblue'
})

// ES6
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue')

// ES5
for(var i = 0; i < boxesArr5.length; i++) {
  if (boxesArr5[i].className === 'boxblue') {
    continue
  }
  boxesArr5[i].textContent = 'Changed to blue!'
}

// ES6
for (const cur of boxesArr6) {
  if (cur.className.includes('blue')) {
    continue
  }
   cur.textContent = 'Changed to blue!'
}

// ES5
var ages = [12, 17, 8, 21, 14, 11]

var full = ages.map(function(cur) {
  return cur >= 18
})
console.log(full) // [false, false, false, true, false, false]
console.log(full.indexOf(true)) // 3
console.log(ages[full.indexOf(true)])

// ES6
ages.findIndex(cur => cur >= 18) // 3
ages.find(cur => cur >= 18) // 21

// Spread Operator

function addFourAges (a, b, c, d) {
  return a + b + c + d
}

var sum1 = addFourAges(18, 30, 12, 21)
console.log(sum1) // 81

// ES5
var ages = [18, 30, 12, 31]
var sum2 = addFourAges.apply(null, ages)
console.log(sum2) // 81

// ES6
const max3 = addFourAges(...ages)
console.log(max3)

const familySmith = ['John', 'Jane', 'Mark']
const familyMiller = ['Mary', 'Bob', 'Ann']
const bigFamily = [...familySmith, 'Lily', ...familyMiller]
console.log(bigFamily) // Combines all const above

const h = document.querySelector('.h1')
const boxes = document.querySelectorAll('.box')
const all = [h, ...boxes]

Array.from(all).forEach(cur => cur.style.color = 'purple')

// Rest parameters

// ES5
function isFullAge5() {
  // console.log(arguments)
  var argsArr = Array.prototype.slice.call(arguments, 1)
  argsArr.forEach(function(cur) {
    console.log(2016 - cur >= limit)
  })
}

isFullAge5(21, 1990, 1999, 1965) // true false true

// ES6
function isFullAge6(limit, ...years) {
  // console.log(years)
  years.forEach(cur => console.log(2016 - cur >= limit))
}

isFullAge6(18, 1990, 1999, 1965) // true false true

// Default parameters

// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
  
  lastName === undefined ? lastName = 'Smith' : lastName = lastName
  nationality === undefined ? nationality = 'American' : nationality = nationality
  
  this.firstName = firstName
  this.yearOfBirth = yearOfBirth
  this.lastName = lastName
  this.nationality = nationality
}

var john = new SmithPerson('John', 1990) 
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish')

// ES6
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
  
  lastName === undefined ? lastName = 'Smith' : lastName = lastName
  nationality === undefined ? nationality = 'American' : nationality = nationality
  
  this.firstName = firstName
  this.yearOfBirth = yearOfBirth
  this.lastName = lastName
  this.nationality = nationality
}

var john = new SmithPerson('John', 1990) 
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish')

// Maps

const question = new Map()

question.set('question', 'What is the official name of the latest major Javascript version?')
question.set(1, 'ES5')
question.set(2, 'ES6')
question.set(3, 'ES2015')
question.set(4, 'ES7')
question.set('correct', 3)
question.set(true, 'Correct answer :D')
question.set(false, 'Wrong, please try again')

question.get('question') // What is the official name of the latest major Javascript version?
question.get(question.size) // 8

if (question.has(4)) {
  question.delete(4) // removes key 4
}

question.clear() // clears entire object

question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`))

for (let [key, value] of question.entries()) {
  if (typeof(key) === 'number') {
    console.log(`Answer ${key} : ${value}`)
  }
}

const ans = parseInt(prompt('Write the correct answer'))
question.get(ans === question.get('correct'))

// Classes

// ES5
var Person5 = function(name, yearOfBirth, job) {
  this.name = name
  this.yearOfBirth = yearOfBirth
  this.job = job
}

Person.prototype.calculateAge = function() {
  var age = new Date().getFullYear() - this.yearOfBirth
  console.log(age)
}

var john6 = new Person5('John', 1990, 'teacher')

// ES6
class Person6 {
  constructor (name, yearOfBirth, job) {
    this.name = name
    this.yearOfBirth = yearOfBirth
    this.job = job
  }

  calculateAge() {
    var age = new Date().getFullYear() - this.yearOfBirth
    console.log(age)
  }

  static greeting() {
    console.log('Hey there!')
  }
}

const john6 = new Person6('John', 1990, 'teacher')

Person6.greeting() // Hey there!

// Classes with subclasses
// ES5

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
  Person5.call(this, name, yearOfBirth, job)
  this.olympicGames = olympicGames
  this.medals = medals
}

Athlete5.prototype = Object.create(Person5.prototype)

Athlete5.prototype.wonMedal = function () {
  this.medals++
  console.log(this.medals)
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10)

johnAthlete5.calculateAge() // 30
johnAthlete5.wonMedal() // 11

// ES6

class Athlete6 extends Person {
  constructor(name, yearOfBirth, job, olympicGames, medals){
    super(name, yearOfBirth, job)
    this.olympicGames = olympicGames
    this.medals = medals
  }

  wonMedal() {
    this.medals++
    console.log(this.medals)
  }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10)

johnAthlete6.wonMedal() // 11
johnAthlete6.calculateAge() // 30
