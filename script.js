const rock = 0;
const paper = 1;
const scissors = 2;
const rockPaperScissors = [rock, paper, scissors];
let playerSelection;


function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    return rockPaperScissors[choice];
};

function playerOptions(selection){
    if (typeof selection === 'string'){
        selection = selection.toLowerCase();
        if (selection === "rock"){
            playerSelection = 0;
        } else if (selection === "paper"){
            playerSelection = 1;
        } else if (selection === "scissors"){
            playerSelection = 2;
        }
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === 0 && computerSelection === 1){
        console.log("You Lost!");
    } else if (playerSelection === 0 && computerSelection === 2){
        console.log("You Won!");
    } else if (playerSelection === 1 && computerSelection === 0){
        console.log("You Won");
    } else if (playerSelection === 1 && computerSelection === 2){
        console.log("You Lost!");
    } else if (playerSelection === 2 && computerSelection === 0){
        console.log("You Lost");
    } else if (playerSelection === 2 && computerSelection === 1){
        console.log("You Win!");
    } else if (playerSelection === computerSelection){
        console.log("It's a Tie");
    }
  } 

