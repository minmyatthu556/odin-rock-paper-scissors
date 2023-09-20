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

console.log(getComputerChoice());