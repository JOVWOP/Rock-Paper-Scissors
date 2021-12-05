
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
    let playerChoice = prompt("Enter your selection:").toLowerCase()
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    if ( (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === 'scissors' && computerSelection === 'paper') )
    {
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    else if ( (playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock"))
    {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
    else if (playerSelection === computerSelection)
    {
        return 'Its a tie!'
    }
}

console.log(playRound('paper','rock'))