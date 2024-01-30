const choices = ["rock","paper","scissor"];
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorBtn = document.getElementById('scissor');
const form = document.querySelector('form');
const text = document.querySelector('.scoreText');
const pcScore = document.querySelector('.pcScore');
const playerScore = document.querySelector('.playerScore');



let playerSelection = ''
let score = {"pc":0,"player":0}


function validator(str){return str.toLowerCase()}
function getComputerChoice(){
   return choices[(Math.floor(Math.random() * choices.length))]
}
function playRound(playerSelection, computerSelection, score) {
   if((playerSelection == 'rock' && computerSelection == 'scissor') || 
      (playerSelection == 'paper' && computerSelection == 'rock') || 
      (playerSelection == 'scissor' && computerSelection == 'paper')){
      score['player']++
      return  `You Won! ${playerSelection} beats ${computerSelection}`
   }
   else if(playerSelection == computerSelection){
      return  "Tie!"
   }
   else{
      score['pc']++
      return  `You Lose! ${computerSelection} beats ${playerSelection}`
   }
}

function playGame(playerSelection,score){
   const computerSelection = getComputerChoice();
   text.innerHTML = playRound(playerSelection,computerSelection, score)
   pcScore.innerHTML = "PC: "+score['pc']
   playerScore.innerHTML = "Player: "+score['player']
   
}


form.addEventListener('submit',(e)=>{
   e.preventDefault();
   playGame(e.submitter.id,score)
})
