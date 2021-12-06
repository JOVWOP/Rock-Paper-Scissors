
function getRandomNum() {
    return Math.floor(Math.random() * 3);
}


function computerPlay() {
    let randomNumber = getRandomNum();
    let choice = "";

    if (randomNumber === 0) {
        choice = "rock"
    }
    else if (randomNumber === 1) {
        choice = "paper"
    }
    else {
        choice = "scissors";
    }
    return choice;
}

function getPlayerSelection() {
    let playerChoice = prompt("Enter your selection:");
    return playerChoice.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if ( (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === 'scissors' && computerSelection === 'paper') )
    {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`)
        return true;
    }
    else if ( (playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock"))
    {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
    }
    else if (playerSelection === computerSelection)
    {
        return 'Its a tie!'
    }
}


function game() {
    let numGames = 5;
    let counter = 0;
    while (numGames < 5){
        let player = getPlayerSelection();
        playRound(player, computerPlay())

    }

}