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
            return "You Lose! Paper beats Rock";
        } else {
            return "You Win! Rock beats Scissors";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "Rock") {
            return "You Win! Paper beats Rock";
        } else if (computerSelection == "Paper") {
            return "Draw! Paper doesn't beat or lose to Paper";
        } else {
            return "You Lose! Scissors beat Paper";
        }
    } else {
        if (computerSelection == "Rock") {
            return "You Lose! Rock beats Scissors";
        } else if (computerSelection == "Paper") {
            return "You Win! Scissors beat Paper";
        } else {
            return "Draw! Scissors don't beat or lose to Scissors";
        }
    }
}

function game() {
    let userChoice;
    let result;
    for (let i = 0; i < 5; i++) {
        userChoice = prompt("Choose your weapon!");
        result = playRound(userChoice, computerPlay());
        console.log(result);
    }
}