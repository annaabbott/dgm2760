document.querySelector("header >h1").innerText = "High/Low Guessing Game";
document.querySelector("header > h2").innerText = "Are you thinking what I'm thinking?";

// computer chooses a number from 1 to 15.
const randomNumber = Math.floor(Math.random() * 14) + 1;
console.log(randomNumber);

// get the user's guess. Compare to computer's number.
let correctGuess = false;
let totalGuesses = 0;

function checkGuess() {
    console.log("button is working");
    // make sure guess was in range, or ask again.
    // print statement too low, too high, just right
}

// award a ribbon based on number of guesses. 
