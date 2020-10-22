document.querySelector("header >h1").innerText = "Grant's Tomb";
// document.querySelector("header > h2").innerText = "Company Tagline";

const question = {
    stem: "Who is buried in Grant's Tomb?",
    optionA: "George Washington",
    optionB: "U. S. Grant",
    optionC: "Ronald Reagan",
    optionD: "James Garfield",
    correct: 2, 
    display: () => {
        document.querySelector("#stem").textContent = question.stem;
        document.querySelector("#answerA").textContent = question.optionA;
        document.querySelector("#answerB").textContent = question.optionB;
        document.querySelector("#answerC").textContent = question.optionC;
        document.querySelector("#answerD").textContent = question.optionD;
    },
    checkAnswer: (userChoice) => {
        if (userChoice === question.correct) {
            document.querySelector(".feedback").textContent = "Correct!";
        } else {
            document.querySelector(".feedback").textContent = "You guessed wrong. Try again?"
        }
    }
}

document.querySelector("#answerA").addEventListener("click", () => question.checkAnswer(1));
document.querySelector("#answerB").addEventListener("click", () => question.checkAnswer(2));
document.querySelector("#answerC").addEventListener("click", () => question.checkAnswer(3));
document.querySelector("#answerD").addEventListener("click", () => question.checkAnswer(4));

question.display();