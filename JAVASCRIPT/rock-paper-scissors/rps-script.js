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

function playRound(playerSelection, computerSelection){
    playerSelection = capitalizeText(playerSelection);

    /* INVALID PLAYER INPUT */
    if(!isPlayerInputValid(playerSelection)) return `Error! \'${playerSelection}\' is not a valid input!`;

    /* TIE */
    if(playerSelection === computerSelection){
        return `Tie! ${playerSelection} ties with ${computerSelection}!`;
    } else
    /* WIN */
    if(playerSelection === "Rock" && computerSelection === "Scissors"
    ||
    playerSelection === "Paper" && computerSelection === "Rock"
    ||
    playerSelection === "Scissors" && computerSelection === "Paper"){
        return `You Win! ${playerSelection} beats ${computerSelection}!`;
    } else
    /* LOSE */
    return `You Lose! ${computerSelection} beats ${playerSelection}!`;
}

function playGame(){
    for(i = 0; i < 5; i++){
        
        console.log(playRound((window.prompt("Rock, Paper, Scissors!")), getComputerChoice()))
    }
}

function capitalizeText(text){
    
    return text.charAt(0).toUpperCase() + text.slice(1, text.length).toLowerCase();
}

function isPlayerInputValid(playerInput){
    return (playerInput == "Rock" || playerInput == "Paper" || playerInput == "Scissors");
}

playGame();
