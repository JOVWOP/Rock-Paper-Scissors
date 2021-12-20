const buttons = Array.from(document.querySelectorAll('button'));
const displayPara = document.querySelector('.result')
const playerScore = document.querySelector('.playerScore');
const computerScore

function getRandomNum() {
    return Math.floor(Math.random() * 3);
}

function playRound() {
    const playerSelection = this.value;
    const computerSelection = computerPlay();
    const playerCount = 0;
    const computerCount = 0;


    if ( (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === 'scissors' && computerSelection === 'paper') )
    {
        const playerScore = document.querySelector('.playerScore');
        displayPara.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if ( (playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock"))
    {
        const computerScore = document.querySelector('.computerScore');
        displayPara.textContent =`You lose! ${computerSelection} beats ${playerSelection}`;

    }
    else 
    {
        displayPara.textContent = "It's a tie"
    }
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