let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let ComputerChoice;
    
    switch (Math.floor(Math.random() * 100) % 3) {
        case 0:
            ComputerChoice = "Rock";
        break;
        case 1:
            ComputerChoice = "Paper";
        break;
        case 2:
            ComputerChoice = "Scissors";
        break;
    }
    
    return ComputerChoice;
}

function playRound(playerSelection){
    if(isGameOver()){
        displayWinner();
    } else {
        computerSelection = getComputerChoice();
        let result = "";
        // TIE //
        if(playerSelection === computerSelection){
            result = (`Tie! ${playerSelection} ties with ${computerSelection}!`);
        } else
        // WIN //
        if(playerSelection === "Rock" && computerSelection === "Scissors"
        ||
        playerSelection === "Paper" && computerSelection === "Rock"
        ||
        playerSelection === "Scissors" && computerSelection === "Paper"){
            result = (`You Win! ${playerSelection} beats ${computerSelection}!`);
            playerScore++;
        } else {
        // LOSE //
            result = (`You Lose! ${computerSelection} beats ${playerSelection}!`);
            computerScore++;
        }
        displayTurnScore(result);
        displayGameScore();
    }
    if(isGameOver()){
        displayWinner();
    }
}

function displayTurnScore(result){
    turnScore.textContent = result;
}

function displayGameScore(){
    gameScore.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}

function isGameOver(){
    return playerScore === 5 || computerScore === 5;
}

function displayWinner(){
    if(playerScore === 5){
        alert("Player Wins!");
    } else {
        alert("Computer Wins!");
    }
}

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const gameScore = document.getElementById("game-score");
const turnScore = document.getElementById("turn-score");

rockBtn.addEventListener("click", () => playRound("Rock"));
paperBtn.addEventListener("click", () => playRound("Paper"));
scissorsBtn.addEventListener("click", () => playRound("Scissors"));