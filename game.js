let playerCount = 0;
let computerCount = 0;

const buttons = Array.from(document.querySelectorAll('button'));
const displayPara = document.querySelector('.result')
const playerScore = document.querySelector('.playerScore');
const winner = document.querySelector('#winner');
const container = document.querySelector('.container');
const textColor = document.querySelector('.header');
const playerImage = document.querySelector('.player-image');
const computerImage = document.querySelector('.computer-image')

function getRandomNum() {
    return Math.floor(Math.random() * 3);
}


function displayWinner(player1, player2) {
    container.classList.add('btn-disable')
    if (player1 > player2) {
        winner.textContent = 'You won!'
    }
    else if (player2 > player1) {
        winner.textContent = "You lost."
    }
}

function playRound() {
    const playerSelection = this.value;
    const computerSelection = computerPlay();

    /* If the current pushed button value is rock change the img source to rock */
    computerImage.src = `images/${computerSelection}.png`
    playerImage.src = `images/${this.value}.png`
    


    if ( (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === 'scissors' && computerSelection === 'paper') )
    {
        const playerScore = document.querySelector('.playerScore');
        displayPara.textContent = `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
        playerCount++

        playerScore.textContent = `Player Score: ${playerCount}`
    }
    else if ( (playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock"))
    {
        const computerScore = document.querySelector('.computerScore');
        displayPara.textContent =`You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`;
        computerCount++

        computerScore.textContent = `Computer Score: ${computerCount}`
    }
    else 
    {
        displayPara.textContent = "It's a tie"
    }

    if (playerCount === 5 || computerCount === 5) {
        displayWinner(playerCount, computerCount)
    }
}

textColor.style.color = "rgb(73, 251, 53)";

function colorChange() {
    if (textColor.style.color === 'rgb(73, 251, 53)') {
        textColor.style.color = 'white';
    }
    else {
        textColor.style.color = "rgb(73, 251, 53)";
    }
}

setInterval(colorChange, 1000);




function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
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


buttons.forEach(button => {
    button.addEventListener('click', playRound)
})