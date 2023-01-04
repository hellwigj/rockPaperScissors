const choices = ['Rock', 'Paper', 'Scissors'];

function getRandom() {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
    return choices[getRandom()];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (
        playerSelection === 'Rock' && computerSelection === 'Paper' ||
        playerSelection === 'Paper' && computerSelection === 'Scissors' ||
        playerSelection === 'Scissors' && computerSelection === 'Rock') 
        {
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        } 
    else if (playerSelection != 'Rock' || playerSelection != 'Paper' || playerSelection != 'Scissors') {
            return "Player did not enter a valid selection";
    }
    else {
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }
}
