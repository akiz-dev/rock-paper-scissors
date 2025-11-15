// computer choice
function getComputerChoice(){
     const choices = ["rock", "paper", "scissors",];

     const randomNumber = Math.floor(Math.random() * 3);

     return choices[randomNumber];
}

//human choice
function getHumanChoice(){
     const inputHumanChoice = prompt("Chose: 'Paper', 'Rock' or ''Scissors").toLowerCase();

     return inputHumanChoice;
}

//scores
let humanScore = 0;
let computerScore = 0;

//playRound
function playRound(humanChoice,computerChoice){

    if (humanChoice === computerChoice) {
          console.log(`It's a tie! Both chose ${humanChoice}.`);
    } else if (
          humanChoice === "rock" && computerChoice === "scissors" || 
          humanChoice === "paper" && computerChoice === "rock" ||
          humanChoice === "scissors" && computerChoice === "paper"
    ) {
          humanScore++;
          console.log(`You Won! ${humanChoice} beats ${computerChoice}`);
    } else {
          console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
          computerScore++;
    }

    console.log(`SCORE: Computer - ${computerScore} / Human - ${humanScore}`)

}

function playGame() {
     for (let round = 0; round <= 5; round++) {
          console.log(`\nRound ${round}:`);
          const humanSelection = getHumanChoice();
          const computerSelection = getComputerChoice();

          playRound(humanSelection, computerSelection);
     }

     if (humanScore > computerScore) {
        console.log(`\nYou win the game! You'r points: ${humanScore} - Computer points: ${computerScore}`);
      } else if (humanScore < computerScore) {
        console.log(`\nYou lose the game! Computer points: ${computerScore} - You'r points: ${humanScore}`);
      } else {
        console.log(`\nThe game is a tie! Computer points: ${computerScore} - You'r points: ${humanScore}`);
    }
}

// Start the game
playGame();