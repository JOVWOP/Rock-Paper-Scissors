
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
    if ( playerSelection === "rock" && computerSelection === "scissors")
    {
        return "You Lose! Rock beats scissors"
    }
}