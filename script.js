
// function to randomly return a word from an array

function getComputerChoice() {
  let wordArray = ["rock", "paper", "scissor"];
  ranWord = wordArray[Math.floor(Math.random() * wordArray.length)];
  console.log("Me: " + ranWord);
  return ranWord;
}

function playRound(playerSelection, computerSelection) {
  let playerchoice = playerSelection.toUpperCase();
  if ((playerchoice === "ROCK") && (computerSelection === "paper")) {
    return "You Lose! Paper beats Rock";
  }
  else if ((playerchoice === "SCISSOR") && (computerSelection === "rock")) {
    return "You Lose! Rock crushed Scissor";
  }
  else if ((playerchoice === "PAPER") && (computerSelection === "scissor")) {
    return "You Lose! Scissor cuts Paper";
  }
  else if (playerchoice === computerSelection.toUpperCase()) {
    return "It's a TIE!";
  }
  else {
    return "You Won!";
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

// playRound(prompt("It's your turn"), getComputerChoice());