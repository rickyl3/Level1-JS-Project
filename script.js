var playerGuessNum = "";
var correctGuess = "";
var guessesLeft = 7;
const higher = " - The actual code is higher";
const lower = " - The actual code is lower";
const correct = " - Correct guess!"
const gameOver = " - Game Over! The actual code was "
function initialize() {
    playerGuessDisplay = document.getElementById("playerGuess");
    playerLog = document.getElementById("log");
    playerGuessesLeftDisplay = document.getElementById("clock");

    generateNumber();
}

function generateNumber() {
    let digit1 = Math.floor((Math.random() * 3) + 1);
    digit1 = digit1.toString();
    let digit2 = Math.floor((Math.random() * 3) + 1);
    digit2 = digit2.toString();
    let digit3 = Math.floor((Math.random() * 3) + 1);
    digit3 = digit3.toString();

    correctGuess = digit1 + digit2 + digit3;
}

function guess1() {
    playerGuessNum += "1";
    display();
}
function guess2() {
    playerGuessNum += "2";
    display();
}
function guess3() {
    playerGuessNum += "3";
    display();
}
function testGuess() {
    guessesLeft--;
    if (playerGuessNum === correctGuess) {
        playerLog.innerHTML += playerGuessNum + correct;
        playerGuesses = 7;
        generateNumber();
    } else if (parseInt(playerGuessNum) > parseInt(correctGuess)) {
        if (guessesLeft < 1) {
            playerLog.innerHTML += playerGuessNum + gameOver + correctGuess;
            playerGuesses = 7;
            generateNumber();
        } else {
            playerLog.innerHTML += playerGuessNum + lower;
        }
    } else {
        if (guessesLeft < 1) {
            playerLog.innerHTML += playerGuessNum + gameOver + correctGuess;
            playerGuesses = 7;
            generateNumber();
        } else {
            playerLog.innerHTML += playerGuessNum + higher;
        }
    }
    playerGuessesLeftDisplay.innerHTML = "Guesses Left: " + guessesLeft;
    playerLog.innerHTML += "<br>";
}
function display() {
    playerGuessDisplay.innerHTML = playerGuessNum;
    if (playerGuessNum.length < 3) {
        for (let i = playerGuessNum.length; i < 3; i++) {
            playerGuessDisplay.innerHTML += "-";
        }
    } else {
        testGuess();
        playerGuessNum = "";
        display();
    }
}

function clearAll() {
    playerGuessNum = "";
    display();
}