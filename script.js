
//DOM Elements
const choiceEl = document.getElementsByClassName("choice-el")
const scoreEl = document.getElementsByClassName("score-el")
const outcomeEl = document.getElementById("outcome-el")
const rockEl = document.getElementById("rock-el")
const paperEl = document.getElementById("paper-el")
const scissorsEl = document.getElementById("scissor-el")
const playerBox = document.querySelector(".playerchoice")
const computerBox = document.querySelector(".computerchoice")
const finalResults = document.getElementById("final-results")
const gameOverScreen = document.querySelector(".gameover")
const restartBtn = document.getElementById("restartbtn")

//Click Event Listeners
rockEl.addEventListener("click", () =>{
    playRound("rock", computerPlay())
    hasLostGame()
})

paperEl.addEventListener("click", () =>{
    playRound("paper", computerPlay())
    hasLostGame()
})

scissorsEl.addEventListener("click", () =>{
    playRound("scissors", computerPlay())
    hasLostGame()
})

restartBtn.addEventListener("click", () =>{
    restartGame()
})



let playerScore = 0
let computerScore = 0
let winnerStatus = ""

function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);
    switch (randomNum){
        case 0: 
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
};

function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection){
            outcomeEl.innerText = "It's a Tie!"
            winnerStatus = "tie"
        } 
        if (
            (playerSelection === "rock" && computerSelection === "paper") || 
            (playerSelection === "paper" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "rock")
            ){ 
                computerScore ++;
                outcomeEl.innerText = "You Lost!"
                winnerStatus = "loser"
        }
        if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
            ){
                playerScore++;
                outcomeEl.innerText = "You Won!"
                winnerStatus = "winner"
        } 
        
        updateChoice(playerSelection, computerSelection)
        updateScore()
            
  } 

  function resetGame() {
      playerScore = 0
      computerScore = 0
  }

function hasLostGame(){
    if (playerScore === 5 || computerScore === 5){
        gameOver()
        return true
    } else {
        return false
    }
}

function gameOver(){
    gameOverScreen.style.display = "block";
    switch(true){
        case (playerScore === 5):
            finalResults.innerText = "You Won!";
            break;
        case (computerScore === 5):
            finalResults.innerText = "You Lost!";
            break;
    }
}

function updateChoice(playerSelection, computerSelection) {
    switch (playerSelection){
        case "rock": 
            choiceEl[0].innerText = "✊";
            break;
        case "paper":
            choiceEl[0].innerText = "🖐";
            break;
        case "scissors":
            choiceEl[0].innerText = "✌️";
            break;
    }
    switch(computerSelection){
        case "rock": 
            choiceEl[1].innerText = "✊";
            break;
        case "paper":
            choiceEl[1].innerText = "🖐";
            break;
        case "scissors":
            choiceEl[1].innerText = "✌️";
            break;
    }
}

function updateScore(){
    scoreEl[0].innerText = playerScore;
    scoreEl[1].innerText = computerScore;
    if (playerBox.hasAttribute("id", "winner") || computerBox.hasAttribute("id", "winner" || winnerStatus === "tie")){
        playerBox.removeAttribute("id", "winner")
        computerBox.removeAttribute("id", "winner")
    }
    switch (winnerStatus){
        case "winner":
            playerBox.setAttribute("id", "winner");
            break;
        case "loser":
            computerBox.setAttribute("id", "winner");
            break;
    }
}

function restartGame(){
    location.reload();
}