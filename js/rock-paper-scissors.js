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
    let randomNumber = Math.floor(Math.random() * 100) % 3;
    let choice = "";

    //console.log(randomNumber);

    if (randomNumber == 0) {
        choice = "rock";
        return choice;
    }
    else if (randomNumber == 1) {
        choice = "paper";
        return choice;
    }
    else {
        choice = "scissors";
        return choice;
    }
}

/*
    Create a function named getHumanChoice
    The function will return one of the valid choices
    "rock", "paper" or "scissors" depending on what the user inputs
        Do not worry about invalid choices assume the user will always
        input one of those three options
*/

function getHumanChoice() {
    let choice = prompt("rock, paper or scissors?");
    return choice;
}

/*
    Write a function called playGame that calls playRound 5 times
    It keeps track of the scores and declares a winner at the end.
*/

function playGame() {
    /*
    Create a new function called playRound
    It will have two parameters with humanChoice and computerChoice,
        passed as arguments.
    It will play a single round, increment the winners score and
        logs a winner announcement
    Make humanChoice case-insensitive so that "ROCK", "rOcK", or any other
        variation will work
    Have the function display a string value that looks like, "You lose! Paper beats Rock"
    */
    function playRound(human, computer) {
        human = human.toLowerCase();

        if (human == "rock") {
            if (computer == "paper") {
                console.log(`You lose! ${computer} beats ${human}`);
                computerScore++;
                return;
            }
            else if (computer == "scissors") {
                console.log(`You Win! ${human} beats ${computer}`);
                humanScore++;
                return;
            }
            else {
                console.log(`Tie, Human choice: ${human} Computer choice: ${computer}`);
                return;
            }
        }
        else if (human == "paper") {
            if (computer == "scissors") {
                console.log(`You lose! ${computer} beats ${human}`);
                computerScore++;
                return;
            }
            else if (computer == "rock") {
                console.log(`You Win! ${human} beats ${computer}`);
                humanScore++;
                return;
            }
            else {
                console.log(`Tie, Human choice: ${human} Computer choice: ${computer}`);
                return;
            }
        }
        else {
            if (computer == "rock") {
                console.log(`You lose! ${computer} beats ${human}`);
                computerScore++;
                return;
            }
            else if (computer == "paper") {
                console.log(`You Win! ${human} beats ${computer}`);
                humanScore++;
                return;
            }
            else {
                console.log(`Tie, Human choice: ${human} Computer choice: ${computer}`);
                return;
            }
        }
    }

    let humanScore = 0;
    let computerScore = 0;

    for (i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log(`You win! You won ${humanScore} games and the computer won ${computerScore} games.`);
    }
    else if (computerScore > humanScore) {
        console.log(`You lose! You won ${humanScore} games and the computer won ${computerScore} games.`);
    }
    else {
        console.log(`Tie! You won ${humanScore} and the computer won ${computerScore}`);
    }
}

playGame();