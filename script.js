// function to randomly return a word from an array
function getComputerChoice() {
  let wordArray = ["rock", "paper", "scissor"];
  ranWord = wordArray[Math.floor(Math.random() * wordArray.length)];
  return ranWord;
}
//function take input to play single round of game
function playRound(playerSelection, computerSelection) {
  //let playerchoice = playerSelection.toUpperCase();
  if ((playerSelection === "rock") && (computerSelection === "paper")) {
    console.log("You Lose! Paper beats Rock");
  }
  else if ((playerSelection === "scissor") && (computerSelection === "rock")) {
    console.log( "You Lose! Rock crushed Scissor");
  }
  else if ((playerSelection === "paper") && (computerSelection === "scissor")) {
    console.log ("You Lose! Scissor cuts Paper");
  }
  else if (playerSelection === computerSelection) {
    console.log("It's a TIE!");
  }
  else {
    console.log( "You Won!");
  }
}


/*

//function loop to play five rounds with score tracking for both players
function playGame() {
for ( let i = 0; i <= 4; i++) {
  const playerSelection = prompt("Your turn. Rock, Paper, Scissor ?");
  const computerSelection = getComputerChoice();
  result = (playRound(playerSelection, computerSelection))
  if(result == "It's a TIE!") {
    console.log(result + " Computer: " + computerSelection + ", You: " + playerSelection + ", Score is " + computerScore + " - " + humanScore);
  }
  else if (result == "You Won!") {
    humanScore++;
    console.log(result + " Computer: " + computerSelection + ", You: " + playerSelection + ", Score is " + computerScore + " - " + humanScore);
  }  
  else {
    computerScore++;
    console.log(result + " Computer: " + computerSelection + ", You: " + playerSelection + ", Score is " + computerScore + " - " + humanScore);
  }
}
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

*/


const body = document.querySelector("body")
body.style.backgroundColor = "#414141";

const heading = document.createElement("h1");
heading.textContent = "ROCK-PAPER-SCISSOR";
heading.style.color = "white";
body.insertBefore(heading, container);


const scores = document.querySelector(".scores");
scores.style.backgroundColor = "grey";
scores.style.color = "yellow";
scores.style.height = "150px";
scores.style.padding = "15px";
scores.style.marginTop = "20px";
scores.style.fontWeight = "bold";


const btn1 = document.querySelector("#button1");
btn1.addEventListener("click", () => playRound("rock", getComputerChoice()));


const btn2 = document.querySelector("#button2")
btn2.addEventListener("click", () => playRound("paper", getComputerChoice()));

const btn3 = document.querySelector("#button3")
btn3.addEventListener("click", () => playRound("scissor", getComputerChoice()));