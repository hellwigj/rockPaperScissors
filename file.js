const choices = ['Rock', 'Paper', 'Scissors'];

function getRandom() {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
    return choices[getRandom()];
}

function playRound(playerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let computerSelection = getComputerChoice();
    if (
        playerSelection === 'Rock' && computerSelection === 'Paper' ||
        playerSelection === 'Paper' && computerSelection === 'Scissors' ||
        playerSelection === 'Scissors' && computerSelection === 'Rock') 
        {
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        } 
    else if (playerSelection != 'Rock' && playerSelection != 'Paper' && playerSelection != 'Scissors') {
            return "Player did not enter a valid selection";
    }
    else {
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }
}

function game(x) {  
    for(let i = 1; i <= x; i++) {
        let userSel = prompt('Please enter Rock, Paper, or Scissors');
        console.log(playRound(userSel));
    }
}

function makeButton(choice, name) {
    choice.textContent = name;
    buttonsDiv.appendChild(choice);
    choice.addEventListener('click', () => result.textContent = playRound(name));
}

const gameUI = document.querySelector("#game");
const buttonsDiv = document.createElement('div');
const resultsDiv = document.createElement('div');
gameUI.appendChild(buttonsDiv);
gameUI.appendChild(resultsDiv);

const result = document.createElement('p');

const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');
makeButton(rock, "Rock");
makeButton(paper, "Paper");
makeButton(scissors, "Scissors");

resultsDiv.appendChild(result);



//game(1);
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));