// computer choice
function getComputerChoice(){
     const choices = ["rock", "paper", "scissors",];

     const randomNumber = Math.floor(Math.random() * 3);

     return choices[randomNumber];
}

//scores
let humanScore = 0;
let computerScore = 0;

//playRound
function playRound(humanChoice,computerChoice){

    if (humanChoice === computerChoice) {
          showRounds.textContent = `It's a tie! Both chose ${humanChoice}.`;
          totalScoresDiv.textContent = `Human Score: ${humanScore} - Computer Score: ${computerScore}`
    } else if (
          humanChoice === "rock" && computerChoice === "scissors" || 
          humanChoice === "paper" && computerChoice === "rock" ||
          humanChoice === "scissors" && computerChoice === "paper"
    ) {
          showRounds.textContent = `You Won! ${humanChoice} beats ${computerChoice}`;
          humanScore++;
          totalScoresDiv.textContent = `Human Score: ${humanScore} - Computer Score: ${computerScore}`
    } else {
          showRounds.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
          computerScore++;
          totalScoresDiv.textContent = `Human Score: ${humanScore} - Computer Score: ${computerScore}`
     }

    console.log(`SCORE: Human - ${humanScore} / Computer - ${computerScore}`);   

     //show player winner
     if (humanScore === 5 && humanScore > computerScore) {
          winnerEl.textContent = `You win! ${humanScore} - ${computerScore}`;
                  
          setTimeout( () => {
               resetElWinner();
               console.clear();
               humanScore = 0;
               computerScore = 0;  
               totalScoresDiv.textContent = `Human Score: ${humanScore} - Computer Score: ${computerScore}`;
               showRounds.textContent = '';

          }, "5000");
          
     } else if ( computerScore === 5 && computerScore > humanScore) {
          winnerEl.textContent = `Computer win! ${computerScore} - ${humanScore}`;
         
          setTimeout( () => {
               resetElWinner();
               console.clear();
               humanScore = 0;
               computerScore = 0;  
               totalScoresDiv.textContent = `Human Score: ${humanScore} - Computer Score: ${computerScore}`;
               showRounds.textContent = '';

          }, "5000");
     }
}

function resetElWinner() {
     winnerEl.textContent = '';
}

// show scores Html
let totalScoresDiv = document.querySelector("#totalScores > p");

//show winner
let winnerEl = document.querySelector('#player-winner > h2');

//show rounds
let showRounds = document.querySelector('#showRounds');

// get buttons
let rockButton = document.querySelector("#rockBtn");
let paperButton = document.querySelector("#paperBtn");
let scissorsButton = document.querySelector("#scissorsBtn");

rockButton.addEventListener("click", function() {
     playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", function() {
     playRound("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", function (){
     playRound("scissors", getComputerChoice());
});
