// computer choice func
function getComputerChoice() {
     const choices = ["rock", "paper", "scissors"];
     const computerChoice = Math.floor(Math.random() * choices.length);
     return choices[computerChoice];
}
console.log(getComputerChoice())

// human choice func
function getHumanChoice() {
     const humanChoice = prompt("Type only one: 'Rock', 'Paper' or 'Scissors'");

     return humanChoice;
}
console.log(getHumanChoice());
// getHumanChoice();