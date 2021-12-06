
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
        console.log(`You win! ${playerSelection} beats ${computerSelection}`)
        return true;
    }
    else if ( (playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock"))
    {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
        return false;
    }
    else if (playerSelection === computerSelection)
    {
        console.log('Its a tie!')
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
        console.log(`Round: ${counter}\nScore: Player: ${playerCount} Computer: ${computerCount}`)
        counter++;
    }
    if (playerCount > computerCount) {
        console.log("Player wins!")
    }
    else if (playerCount < computerCount) {
        console.log("Computer wins!")
    }
    else {
        console.log("Tie game!")
    }



    }

game();