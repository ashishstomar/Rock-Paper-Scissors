
// function to randomly return either word from an array

function getComputerChoice() {
    let wordArray = [ "rock", "paper", "scissor"];
    ranWord = wordArray[Math.floor(Math.random()* wordArray.length)];
    console.log(ranWord);
}

