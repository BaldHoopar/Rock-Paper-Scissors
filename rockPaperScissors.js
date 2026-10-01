console.log("Hello, world!")

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 9);
    let choice;

    if (computerChoice <= 2) {
        choice = "Rock";
    }
    else if (computerChoice <= 5) {
        choice = "Paper";
    }
    else {
        choice = "Scissors";
    }

    return choice;
}

//getComputerChoice()

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, Scissors?").toLowerCase();
    
    
    return humanChoice
}

//getHumanChoice();



function playRound(human, computer) {
    let decision;

    if (human == "rock" && computer == "Rock") {
        decision = "It's a tie"
    }
    else if (human == "paper" && computer == "Paper") {
        decision = "It's a tie";
    }
    else if (human == "scissors" && computer == "Scissors") {
        decision = "It's a tie";
    }
    //human wins
    else if (human == "rock" && computer == "Scissors") {
        decision = "Human wins!";
    }
    else if (human == "paper" && computer == "Rock") {
        decision = "Human wins!";
    }
    else if (human == "scissors" && computer == "Paper") {
        decision = "Human wins!";
    }
    //computer wins
    else {
        decision = "Computer wins!";
    }
    return decision
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    for (let i = 0; i < 5; i++) {

        let hChoice = getHumanChoice();
        let cChoice = getComputerChoice();

        let result = playRound(hChoice, cChoice)
        if(result == "It's a tie") {
            console.log("No score awarded");
        }
        else if (result == "Human wins!") {
            humanScore++;
            console.log("Human won this round!");
        }
        else {
            computerScore++;
            console.log("Computer won this round!");
        }
        
    }
    
}

//playGame()
console.log(humanScore);
console.log(computerScore);
if (humanScore > computerScore) {
    console.log("The winner is: Human.");
}
else if (humanScore == computerScore) {
    console.log("No winner!. The score is tied.")
}
else {
    console.log("The winner is: Computer.");
}