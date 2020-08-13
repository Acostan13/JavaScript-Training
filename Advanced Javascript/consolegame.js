/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

// Using an IIFE to make code private
(function() {

// Function constructor
function Question(question, choices, answer) {
    this.question = question
    this.choices = choices
    this.answer = answer
}

// Questions
var firstQuestion = new Question('What is love?', ['Baby don\'t hurt me', 'Biological phenomena', 'Used for procreation', 'All of the above'], 3)
var secondQuestion = new Question('What\'s the best fruit?', ['Pineapple', 'Watermelon', 'Apple', 'Orange'], 0)

// Stored questions in array
var questions = [firstQuestion, secondQuestion]

// Find random question
var random = Math.floor(Math.random() * questions.length)

// Method for question object to display random question
Question.prototype.randomQuestion = function() {
    console.log(this.question)

    for (var i = 0; i < this.choices.length; i++) {
        console.log(i + ': ' + this.choices[i])
    }

}

// Checks if the user's answer is correct
Question.prototype.checkAnswer = function(answer) {
    
    if(answer == this.answer) {
        console.log('Correct!')
    } else {
        console.log('Close but no cigar')
    }
}

// Calls a random question
questions[random].randomQuestion()

// Prompts user to enter an answer
var response = prompt('Please enter the correct number')

// Passes users response to checkAnswer method
questions[random].checkAnswer(response)

})()

