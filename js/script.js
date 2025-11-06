function getComputerChoice() {
   const randomNumber = Math.random();

   if (randomNumber < 1 / 3) {
        return "rock";
   } else if (randomNumber < 2 / 3) {
        return "paper";
    } else {
        return "scissors"
   }
}

console.log(getComputerChoice());