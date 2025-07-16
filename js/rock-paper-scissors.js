/*
    Create a function called getComputerChoice
    Write code so that getComputerChoice will randomly
        return one of the following string values: "rock",
        "paper" or "scissors"
    CREATE a random number generator that goes from 0 - 99
    CASE 1: 0 - 33 assign to rock
    CASE 2: 34 - 66 assign to paper
    CASE 3: 67 - 99 assign to scissors

*/
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100);
    let choice = "";
    console.log(randomNumber);
    if (randomNumber >= 0 && randomNumber <= 33) {
        choice = "rock";
        return choice;
    }
    else if (randomNumber >= 34 && randomNumber <= 66) {
        choice = "paper";
        return choice;
    }
    else {
        choice = "scissors";
        return choice;
    }
}