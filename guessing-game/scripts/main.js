document.querySelector("header >h1").innerText = "High/Low Guessing Game";
document.querySelector("header > h2").innerText = "Are you thinking what I'm thinking?";

// computer chooses a number from 1 to 15.
const randomNumber = Math.floor(Math.random() * 14) + 1;
console.log(randomNumber);

// get the user's guess. Compare to computer's number.
let correctGuess = false;
let totalGuesses = 0;
let playerGuess = 0;

//set ribbon imgs as variables
const blueRibbon = "../images/blue-ribbon.png";
const yellowRibbon = "../images/yellow-ribbon.png";
const redRibbon = "../images/red-ribbon.png"

guessDisplay.innerText = totalGuesses;

function checkGuess() {
    
    console.log("button is working");
    totalGuesses++;
    guessDisplay.innerText = totalGuesses;

    playerGuess = parseInt(document.querySelector("#guess").value);
    const feedback = document.querySelector("#feedback");
    
    // make sure guess was in range, or ask again.
    if (playerGuess <1 || playerGuess > 15) {
        feedback.innerText = "Please enter a number from 1 to 15."
        totalGuesses -= 1
        guessDisplay.innerText = totalGuesses
    } else if (playerGuess === randomNumber) {
        //then return congratulations
        feedback.innerText = "Spot on! You guessed right."
        awardRibbon()
    } else if (playerGuess > randomNumber) {
        //return too high 
        feedback.innerText = "Too high! Try again."
    } else {
        //return too low
        feedback.innerText = "Too low! Try again."
    }
}

// award a ribbon based on number of guesses. 
function awardRibbon() {
    if (document.getElementById('award')) {
        return;
    }

    //blue for <=3
    //red for 4-6
    //yellow for >=7
    switch(totalGuesses) {
        case 1: 
        case 2:
        case 3:
            //give a blue ribbon.
            imgPath = blueRibbon;
            break;

        case 4:
        case 5:
        case 6:
            //red
            imgPath = redRibbon;
            break;

        default: 
            imgPath = yellowRibbon;
    }

    const newImg = document.createElement("img"); 
    newImg.id = "award";
    newImg.setAttribute("src", imgPath);
    const ribbon = document.querySelector("#ribbonArea");
    ribbon.appendChild(newImg);

    document.getElementById("guessBtn").disabled = true;
}