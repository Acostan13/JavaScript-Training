/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Global Variables
var scores, roundScore, activePlayer, gamePlaying, previousRoll, previousRoll2, winningScore;

// Starts the game
init();

document.querySelector(".btn-roll").addEventListener("click", function () {
  // Checks if the game is playing by not allowing the user to roll the dice again
  if (gamePlaying) {
    // Random dice values
    var dice = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    // Display the resulting die rolls
    var diceDOM = document.querySelector(".dice");
    diceDOM.src = "dice-" + dice + ".png";
    diceDOM.style.display = "block";

    var diceDOM2 = document.querySelector(".dice2");
    diceDOM2.src = "dice-" + dice2 + ".png";
    diceDOM2.style.display = "block";

    // If the previous and current roll is equal to 6, reset the players entire score
    if (previousRoll === 6 && dice == 6 || previousRoll2 === 6 && dice2 == 6) {
      console.log("fuasdf workd!");
      roundScore = 0;
      scores[activePlayer] = 0;
      // document.querySelector('#current-' + activePlayer).textContent = 0
      // document.querySelector("#score-" + activePlayer).textContent = 0
      previousRoll = 0;
      previousRoll2 = 0;

      nextPlayer();
    }
    // Update the round score IF the rolled number was NOT a 1
    else if (dice !== 1) {
      // Add Score
      roundScore += dice + dice2;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
      previousRoll = dice;
      previousRoll2 = dice2;

    } else if (dice2 === 1 || dice === 1) {
        roundScore = 0
        document.querySelector(
            "#current-" + activePlayer
          ).textContent = roundScore;
    }
    
    
    else {
      // Next Player
      previousRoll = dice;
      previousRoll2 = dice2
      nextPlayer();
    }
  } else {
    previousRoll = 0;
    previousRoll2 = 0;
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  // Checks if the game is playing by not allowing the user to roll the dice again
  if (gamePlaying) {
    // Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];

    // Check if player won the game
    if (scores[activePlayer] >= winningScore) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");

      // Ends game
      gamePlaying = false;
    } else {
      // Next Player
      nextPlayer();
    }
  }
});

function nextPlayer() {
  // Next Player
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  // Selecting elements by ID
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  // Adding and Removing 'active' css on player
  // document.querySelector('.player-0-panel').classList.remove('active')
  // document.querySelector('.player-1-panel').classList.add('active')

  // Toggling 'active' css between players
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // Hiding dice when player rolls a one
  document.querySelector(".dice").style.display = "none";
}

// Starts a new game
document.querySelector(".btn-new").addEventListener("click", init);

// Refreshes the game data and display
function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  winningScore = 100;
  gamePlaying = true;

  // Hides the dice before first roll
  document.querySelector(".dice").style.display = "none";
  document.querySelector(".dice2").style.display = "none";

  // Setting the scores back to zero
  // Selecting elements by ID is slightly faster than querySelector
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  // Setting names back to original display
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("active");

  // Setting active class back to player 1
  document.querySelector(".player-0-panel").classList.add("active");
}

const input = document.querySelector("input");
const log = document.getElementById("values");

input.addEventListener("input", updateValue);

function updateValue(e) {
  winningScore = e.target.value;
}

// document.querySelector('#current-' + activePlayer).textContent = dice
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'
//var x = document.querySelector('#score-0').textContent
//console.log(x) // 0
