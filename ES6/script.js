// Lecture: let and const

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
