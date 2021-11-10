const cp = function computerPlay() {
    const move = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * 3);
    return move[choice];
}

const singleRound = function playRound(playerSelection, computerSelection) {

    const dict = {};
    dict["rock"] = 0;
    dict["paper"] = 1;
    dict["scissors"] = 2;
    let win = 0;

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    const playerChoice = dict[playerSelection];
    const computerChoice = dict[computerSelection];

    const result = playerChoice - computerChoice;

    if (result == 0) {
        console.log("Both played " + playerSelection + "! It's a tie.");
    }

    if (result == 1 || result == -2) {
        console.log("You win! " + playerSelection + " beats " + computerSelection + "!");
        win++;
    }

    if (result == -1 || result == 2) {
        console.log("You lose :( " + computerSelection + " beats " + playerSelection + "!");
        win--;
    }

    return win;

}

const g = function game() {
    let score = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Make your move: ");
        score += singleRound(playerSelection, cp());
    }

    if (score == 0) console.log("It's a tie!");
    else if (score > 0) console.log("Player wins!");
    else if (score < 0) console.log("Computer wins!");
}