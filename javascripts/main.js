var userChoice = []
var compChoice = []

function computerChoice(){
  compChoice= Math.random();
  if (compChoice < 0.34) {
    compChoice = "rock";
  } else if(compChoice <= 0.67) {
    compChoice = "paper";
  } else {
    compChoice = "scissors";
  }
  compdisplay.value = compChoice
} 


function Choice(button){
  userChoice = button
  display.value = button
}


var compare = function()  {
  computerChoice()
  if (userChoice == compChoice) {
    result.value = "Tie! Try again.";
  } else if (userChoice == "rock") {
    result.value = compChoice == "scissors" ? "Rock wins" : "Paper wins";
  } else if (userChoice=="paper") {
    result.value = compChoice == "rock" ? "Paper wins": "Scissors wins";
  } else if (userChoice == "scissors") {
    result.value = compChoice == "paper" ? "Scissors wins" : "Rock wins";
  }
}

function clearDisplay() {
  display.value = []
  compdisplay.value = []
  result.value =[]
}