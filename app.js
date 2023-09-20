function getComputerChoice() {
    let ram = Math.floor(Math.random() * 3);
    let choice;
    if (ram === 1) {
        choice = "rock";
    } else if (ram == 2) {
        choice = "paper";
    } else if (ram == 0) {
        choice = "scissors";
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
        switch (computerSelection) {
            case "rock":
                return "It's a tie";
                break;
            
            case "paper":
                return "Computer wins";
                break;
            
            case "scissors":
                return "Player wins";
                break;
        
            default:
                break;
        }
    } else if (playerSelection === "paper") {
        switch (computerSelection) {
            case "rock":
                return "Player wins";
                break;
            
            case "paper":
                return "It's a tie";
                break;
            
            case "scissors":
                return "Computer wins";
                break;
        
            default:
                break;
        } 
    } else if (playerSelection === "scissors") {
        switch (computerSelection) {
            case "rock":
                return "Computer wins";
                break;
            
            case "paper":
                return "Player wins";
                break;
            
            case "scissors":
                return "It's a tie";
                break;
        
            default:
                break;
        } 
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));