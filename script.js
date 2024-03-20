// function to randomly return a word from an array
function getComputerChoice() {
  let wordArray = ["rock", "paper", "scissor"];
  ranWord = wordArray[Math.floor(Math.random() * wordArray.length)];
  return ranWord;
}
//function take input to play single round of game
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

//function loop to play five rounds with score tracking for both players
function playGame() {

  //for ( let i = 0; i <= 4; i++) {
  //  const playerSelection = prompt("Your turn. Rock, Paper, Scissor ?");
  //  const computerSelection = getComputerChoice();
  //  result = (playRound(playerSelection, computerSelection));
//
  //  if(result == "It's a TIE!") {
  //    console.log(result + " Computer: " + computerSelection + ", You: " + playerSelection + ", Score is " + computerScore + " - " + humanScore);
  //  }
  //  else if (result == "You Won!") {
  //    humanScore++;
  //    console.log(result + " Computer: " + computerSelection + ", You: " + playerSelection + ", Score is " + computerScore + " - " + humanScore);
  //  }  
  //  else {
  //    computerScore++;
  //    console.log(result + " Computer: " + computerSelection + ", You: " + playerSelection + ", Score is " + computerScore + " - " + humanScore);
  //  }
  //}
}

//initialize score tracking global scope variables
let humanScore = 0;
let computerScore = 0;

//invoke function
playGame()

//conditional statements to decide winner and scores
if (computerScore > humanScore) {
  console.log("You Lose! Final Scores -> You: " + humanScore + " Computer: " + computerScore);
}
else if (computerScore < humanScore) {
  console.log("You won! Final Scores -> You: " + humanScore + " Computer: " + computerScore) ;
}
else {
  console.log("It's a TIE! Final Scores -> You: " + humanScore + " Computer: " + computerScore);
}

const buttons = document.querySelectorAll("button");