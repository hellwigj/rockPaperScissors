const choices = ['Rock', 'Paper', 'Scissors'];

function getRandom() {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
    return choices[getRandom()];
}

function setScoreDisplay() {
    scoreText.textContent = `Player: ${gameScore[0]}, Computer: ${gameScore[1]}`
}

function checkForWinner() {
    if (gameScore[0] === 5 && gameScore[0] > gameScore[1]) {
        finalWinner.textContent = "Congratulations! You won 5 times!"
    } else if (gameScore[1] === 5 && gameScore[1] > gameScore[0]) {
        finalWinner.textContent = "Dang! The computer won 5 times!"
    }
}

function playRound(playerSelection, score) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let computerSelection = getComputerChoice();
    if (
        playerSelection === 'Rock' && computerSelection === 'Paper' ||
        playerSelection === 'Paper' && computerSelection === 'Scissors' ||
        playerSelection === 'Scissors' && computerSelection === 'Rock') 
        {
            score[1]++;
            console.log(score);
            setScoreDisplay();
            checkForWinner();
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        } 
    else if (playerSelection != 'Rock' && playerSelection != 'Paper' && playerSelection != 'Scissors') {
            return "Player did not enter a valid selection";
    }
    else if (playerSelection == computerSelection) {
            return `It is a tie! Both players selected ${playerSelection}.`
    }
    else {
        score[0]++;
        console.log(score);  
        setScoreDisplay(); 
        checkForWinner();
        return `You Win! ${playerSelection} beats ${computerSelection}`;
        }
}

// function game(x) {  
//     for(let i = 1; i <= x; i++) {
//         let userSel = prompt('Please enter Rock, Paper, or Scissors');
//         console.log(playRound(userSel));
//     }
// }

function makeButton(choice, name, score) {
    choice.textContent = name;
    buttonsDiv.appendChild(choice);
    choice.addEventListener('click', () => result.textContent = playRound(name, score));
}

let gameScore = [0, 0];

const gameUI = document.querySelector("#game");
const buttonsDiv = document.createElement('div');
const resultsDiv = document.createElement('div');
const scoreDiv = document.createElement('div');
gameUI.appendChild(buttonsDiv);
gameUI.appendChild(resultsDiv);
gameUI.appendChild(scoreDiv);

const result = document.createElement('p');
const scoreText = document.createElement("h3");
const finalWinner = document.createElement("h1");

const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');
makeButton(rock, "Rock", gameScore);
makeButton(paper, "Paper", gameScore);
makeButton(scissors, "Scissors", gameScore);

resultsDiv.appendChild(result);
scoreDiv.appendChild(scoreText);
scoreDiv.appendChild(finalWinner);

setScoreDisplay();

//game(1);
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection)); 