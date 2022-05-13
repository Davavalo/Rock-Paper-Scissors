const rock = 0;
const paper = 1;
const scissors = 2;
const rockPaperScissors = [rock, paper, scissors];
let playerScore = 0
let computerScore = 0

function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    return rockPaperScissors[choice];
};

function playerOptions(selection){
    if (typeof selection === 'string'){
        selection = selection.toLowerCase();
        if (selection === "rock"){
            return 0;
        } else if (selection === "paper"){
            return 1;
        } else if (selection === "scissors"){
            return 2;
        }
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        alert("It's a Tie");
    } else if (
        (playerSelection === 0 && computerSelection === 1) || 
        (playerSelection === 1 && computerSelection === 2) ||
        (playerSelection === 2 && computerSelection === 0)
        ){ 
            computerScore ++;
            alert("You Lost");
    } else if (
        (playerSelection === 0 && computerSelection === 2) ||
        (playerSelection === 1 && computerSelection === 0) ||
        (playerSelection === 2 && computerSelection === 1)
        ){
            playerScore++;
            alert("You Won");
    }    
  } 

  function game(){
    let enterChoice = prompt("Rock, Paper, or Scissors?")
    enterChoice = enterChoice.toLowerCase()
    if (
        (enterChoice === "rock") ||
        (enterChoice === "paper") ||
        (enterChoice === "scissors")
            ){
                playRound(playerOptions(enterChoice), computerPlay())
                checkScore()
    } else {
        alert("That's Not A Valid Choice")
        game()
    }
  }

  function resetGame() {
      playerScore = 0
      computerScore = 0
  }

  function checkScore(){
    if (computerScore === 5){
        alert(`You Lost, Final Score = Player ${playerScore}, Computer ${computerScore}`)
        resetGame()
    } else if (playerScore === 5) {
        alert(`You Won, Final Score = Player ${playerScore}, Computer ${computerScore}`)
        resetGame()
    } else if (playerScore != 5 || computerScore !=5){
        game()
    }
  }
  