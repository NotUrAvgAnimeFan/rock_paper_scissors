let compScore = 0;
let playerScore = 0;

function computerPlay() {
    let randomVal = Math.random() * 3;

    if (randomVal >= 0 && randomVal < 1) {
        return "Rock";
    } else if (randomVal >= 1 && randomVal < 2) {
        return "Paper";
    } else {
        return "Scissors";
    }

}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock") {
        if (computerSelection == "Rock") {
            return "Draw! Rock doesn't beat or lose to Rock";
        } else if (computerSelection == "Paper") {
            compScore++;
            return "You Lose! Paper beats Rock"; 
        } else {
            playerScore++;
            return "You Win! Rock beats Scissors";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "Rock") {
            playerScore++;
            return "You Win! Paper beats Rock";
        } else if (computerSelection == "Paper") {
            return "Draw! Paper doesn't beat or lose to Paper";
        } else {
            compScore++;
            return "You Lose! Scissors beat Paper";
        }
    } else {
        if (computerSelection == "Rock") {
            compScore++;
            return "You Lose! Rock beats Scissors";
        } else if (computerSelection == "Paper") {
            playerScore++;
            return "You Win! Scissors beat Paper";
        } else {
            return "Draw! Scissors don't beat or lose to Scissors";
        }
    }
}

let results = document.querySelector('.results');
let playerResults = document.querySelector('.player');
let compResults = document.querySelector('.computer');


let rock = document.querySelector('#rock');
rock.addEventListener('click', ()=> {
    results.textContent = playRound('rock', computerPlay());
    playerResults.textContent = "Player Score: " + playerScore;
    compResults.textContent = "Computer Score: " + compScore;
});

let paper = document.querySelector('#paper');
paper.addEventListener('click', ()=> {
    results.textContent = (playRound('paper', computerPlay()));
    playerResults.textContent = "Player Score: " + playerScore;
    compResults.textContent = "Computer Score: " + compScore;
});

let scissors = document.querySelector('#scissors');
scissors.addEventListener('click', ()=> {
    results.textContent = (playRound('scissors', computerPlay()));
    playerResults.textContent = "Player Score: " + playerScore;
    compResults.textContent = "Computer Score: " + compScore;
});

let buttons = document.querySelector('.buttons');
buttons.addEventListener('click', ()=> {
    if (playerScore == 5) {
        playerScore = 0;
        compScore = 0;
        alert("Player has won the game!");
    } else if (compScore == 5){
        playerScore = 0;
        compScore = 0;
        alert("Computer has won the game :(");
    }
});

