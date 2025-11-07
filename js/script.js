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
}

// human choice
 let humanChoice = prompt("Chose one: 'rock', 'paper', 'scissors'").toLowerCase();

function getHumanChoice() {

    return humanChoice;
}

//score
let humanScore = 0;
let computerScore = 0;

//round
function playRound(humanChoice, computerChoice){
     if (humanChoice === computerChoice) {
          console.log("It's a tie!");
     } else if (
          (humanChoice === "rock" && computerChoice === "scissors") ||
          (humanChoice === "paper" && computerChoice === "rock") ||
          (humanChoice === "scissors" && computerChoice === "paper")
     ) {
          console.log(`You win! ${humanChoice} beats ${computerChoice}`);
          humanScore++;
     } else {
          console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
          computerScore++
     }

     console.log(`Score — You: ${humanScore}, Computer: ${computerScore}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
