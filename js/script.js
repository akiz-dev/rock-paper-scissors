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
function getHumanChoice() {
     
}