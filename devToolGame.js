
function getRandomNum() {
    return Math.floor(Math.random() * 3);
}


function computerPlay() {
    let randomNumber = getRandomNum();

    if (randomNumber === 0) {
        return "rock"
    }
    else if (randomNumber === 1) {
        return "paper"
    }
    else {
        return "scissors";
    }
}

function getPlayerSelection() {
    let playerChoice;
    do {
        playerChoice = prompt("Enter your selection:").toLowerCase();
    }
    while (playerChoice != "rock" && playerChoice !="paper" && playerChoice !="scissors")
 
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    if ( (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === 'scissors' && computerSelection === 'paper') )
    {
        alert(`You win! ${playerSelection} beats ${computerSelection}`)
        return true;
    }
    else if ( (playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock"))
    {
        alert(`You lose! ${computerSelection} beats ${playerSelection}`)
        return false;
    }
    else if (playerSelection === computerSelection)
    {
        alert('Its a tie!')
    }
}


function game() {
    let numGames = 5;
    let counter = 1;
    let playerCount = 0;
    let computerCount = 0;

    while (counter <= numGames) {
        let player = getPlayerSelection();
        let result = playRound(player, computerPlay());
    
        if (result === true) {
            playerCount++;
        }
        else if (result === false) {
            computerCount++;
        }
        alert(`Round: ${counter}\nScore: Player: ${playerCount} Computer: ${computerCount}`)
        counter++;
    }
    if (playerCount > computerCount) {
        alert("Player wins!")
    }
    else if (playerCount < computerCount) {
        alert("Computer wins!")
    }
    else {
        alert("Tie game!")
    }
    }

game();