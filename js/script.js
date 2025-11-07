// computer choice
function getComputerChoice() {
     const computerChoice = Math.random();

          if (computerChoice < 0.333) {
               return "rock";
          } else if (computerChoice < 0.666 ) {
               return "paper";
          } else {
               return "scissors";
          }

     return computerChoice;
}

console.log(getComputerChoice());

// human choice
 let humanChoice = prompt("Chose one: 'rock', 'paper', 'scissors'");

function getHumanChoice() {
    return humanChoice;
}

console.log(getHumanChoice());

//score
let humanScore = 0;
let computerScore = 0;

//round
function playRound(){
     
}