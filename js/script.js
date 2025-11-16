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
          console.log(`It's a tie! Both chose ${humanChoice}.`);
          totalScoresDiv.textContent = `Human Score: ${humanScore} - Computer Score: ${computerScore}`
    } else if (
          humanChoice === "rock" && computerChoice === "scissors" || 
          humanChoice === "paper" && computerChoice === "rock" ||
          humanChoice === "scissors" && computerChoice === "paper"
    ) {
          console.log(`You Won! ${humanChoice} beats ${computerChoice}`);
          humanScore++;
          totalScoresDiv.textContent = `Human Score: ${humanScore} - Computer Score: ${computerScore}`
    } else {
          console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
          computerScore++;
          totalScoresDiv.textContent = `Human Score: ${humanScore} - Computer Score: ${computerScore}`
     }

    console.log(`SCORE: Human - ${humanScore} / Computer - ${computerScore}`)
}

// show scores Html
let totalScoresDiv = document.querySelector("#totalScores > p");

// get buttons
let rockButton = document.querySelector("#rockBtn");
let paperButton = document.querySelector("#paperBtn");
let scissorsButton = document.querySelector("#scissorsBtn");

rockButton.addEventListener("click", function() {
     // playRound(rockButton.textContent.toLowerCase(), getComputerChoice());
     playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", function() {
     // playRound(paperButton.textContent.toLowerCase(), getComputerChoice());
     playRound("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", function (){
     // playRound(scissorsButton.textContent.toLowerCase(), getComputerChoice());
     playRound("scissors", getComputerChoice());
});