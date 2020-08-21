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