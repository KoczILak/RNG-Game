// GUESSING GAME

const submitButton = document.getElementById("submitButton");
let guessResults = document.getElementById("GuessResults");
let numberInputField = document.getElementById('numberInput');
let attempts = 0;

let resetButton = document.getElementById("resetButton");
if (resetButton) resetButton.style.display = "none";

let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(`shhhh, it's for the developers: ${randomNumber}`);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function generateNumber() {
    attempts++;
    let numberInput = document.getElementById("numberInput").value;
    numberInput = Number(numberInput);
  if (numberInput === randomNumber) {
    if(attempts === 1){
      guessResults.textContent = `DIRECT SHOOT! YOU MADE IT!!! IT TOOK YOU ${attempts} ATTEMPT!`;
      if (resetButton) resetButton.style.display = "inline";
    } else {
      guessResults.textContent = `DIRECT SHOOT! YOU MADE IT!!! IT TOOK YOU ${attempts} ATTEMPTS!`;
      if (resetButton) resetButton.style.display = "inline";
    }
   } else if (numberInput > randomNumber) {
    guessResults.textContent = "Too high! Why are you high, Bachira!";
    await sleep(1500);
    guessResults.textContent = "Guess a number between 1 and 100!";
  } else if (numberInput < randomNumber) {
    guessResults.textContent = "Too low! Try again my egoist!";
    await sleep(1500);
    guessResults.textContent = "Guess a number between 1 and 100!";
  }
}

if (resetButton) {
  resetButton.addEventListener("click", () => {
    randomNumber = Math.floor(Math.random() * 100) + 1; 
    attempts = 0; 
    console.log(`shhhh, it's for the developers: ${randomNumber}`);
    guessResults.textContent = "Guess a number between 1 and 100!";
    numberInputField.value = ""; 
    resetButton.style.display = "none"; 
  })}