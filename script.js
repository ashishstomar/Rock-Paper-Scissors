// function to randomly return a word from an array

function getComputerChoice() {
  let wordArray = ["rock", "paper", "scissor"];
  ranWord = wordArray[Math.floor(Math.random() * wordArray.length)];
  return ranWord;
}

let humanScore = 0;
let computerScore = 0; 

function playGame(playerSelection) {
  if(humanScore <= 4 && computerScore <= 4) {
    const computerSelection = getComputerChoice();

    if ((playerSelection === "rock") && (computerSelection === "paper")) {
      computerScore++;
      const p = document.createElement('p');
      p.textContent = " You Lose! Paper beats Rock. Computer: " + computerSelection + ", You: " + playerSelection;
      leftCard.appendChild(p)
    }
    else if ((playerSelection === "scissor") && (computerSelection === "rock")) {
       computerScore++;
       const p = document.createElement('p');
       p.textContent = "You Lose! Rock crushed Scissor. Computer: " + computerSelection + ", You: " + playerSelection;
       leftCard.appendChild(p)
    }
    else if ((playerSelection === "paper") && (computerSelection === "scissor")) {
      computerScore++;
      const p = document.createElement('p');
      p.textContent = "You Lose! Scissor cuts Paper. Computer: " + computerSelection + ", You: " + playerSelection;
      leftCard.appendChild(p)
      
    }
    else if (playerSelection === computerSelection) {
      const p = document.createElement('p');
      p.textContent = "It's a TIE! Computer: " + computerSelection + ", You: " + playerSelection; 
      leftCard.appendChild(p)
    }
    else {
      humanScore++;
      const p = document.createElement('p');
      p.textContent = "You Won! Computer: " + computerSelection + ", You: " + playerSelection; 
      leftCard.appendChild(p)
    }
  }
  scoreDisplay()
  resetGame()
  scoreCard.removeChild(intro)
} 


function winner() {
  
  if (computerScore > humanScore) {
    const p = document.createElement('p');
    p.textContent = "You Lose!";
    p.classList.add("result");
    p.style.color = 'red';
    p.style.fontSize = '35px';
    rightCard.appendChild(p);
  }
  else {
    const p = document.createElement('p');
    p.textContent = "You won!";
    p.classList.add("result");
    p.style.color = 'green';
    p.style.fontSize = '35px'
    rightCard.appendChild(p);
  }
}

function resetGame() {
  if (humanScore === 5 || computerScore === 5) {
    winner();
    const container = document.querySelector(".container");
    const resetbtn = document.createElement("button");
    resetbtn.classList.add("resetbtn");
    resetbtn.textContent = "Play again ↻";
    container.appendChild(resetbtn);

    resetbtn.addEventListener('click', function(){
    window.location.reload();
    return false;});

    container.removeChild(btnScissor);
    container.removeChild(btnPaper);
    container.removeChild(btnRock);
    body.removeChild(tagline);
  }
  
}  
const body =document.querySelector("body");
const tagline = document.querySelector(".tagline")
const scoreCard = document.querySelector(".scoreCard");
const intro = document.querySelector(".intro");
const leftCard = document.querySelector(".leftCard");
const rightCard = document.querySelector(".rightCard")


const btnRock = document.querySelector("#btnRock");
btnRock.addEventListener("click", () => playGame("rock"));

const btnPaper = document.querySelector("#btnPaper");
btnPaper.addEventListener("click", () => playGame("paper"));

const btnScissor = document.querySelector("#btnScissor");
btnScissor.addEventListener("click", () => playGame("scissor"));
  


function scoreDisplay() {
  let computerScoreCount = document.querySelector(".computerScoreCount");
  computerScoreCount.textContent = `🤖 Computer: ${computerScore}`;
  rightCard.appendChild(computerScoreCount);

  let humanScoreCount = document.querySelector(".humanScoreCount");
  humanScoreCount.textContent = `👨‍💼 You: ${humanScore}`;
  rightCard.appendChild(humanScoreCount);
}
