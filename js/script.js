// computer choice
function getComputerChoice(){
     const computerChoices = ["Rock", "Paper", "Scissors"];

     const randomNumber = Math.floor(Math.random() * 3);

     return computerChoices[randomNumber];
}

console.log(getComputerChoice());

//human choice
function getHumanChoice(){
     const inputHumanChoice = prompt("Chose: 'Paper', 'Rock' or ''Scissors").toLowerCase();

     return inputHumanChoice;
}

console.log(getHumanChoice())
