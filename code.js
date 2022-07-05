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