var userChoice = []
var compChoice = []

function computerChoice(){
  compChoice= Math.random();
  if (compChoice < 0.34) {
    compChoice = "Rock";
  } else if(compChoice <= 0.67) {
    compChoice = "Paper";
  } else {
    compChoice = "Scissors";
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
  } else if (userChoice == "Rock") {
    result.value = compChoice == "Scissors" ? "Rock wins" : "Paper wins";
  } else if (userChoice=="Paper") {
    result.value = compChoice == "Rock" ? "Paper wins": "Scissors wins";
  } else if (userChoice == "Scissors") {
    result.value = compChoice == "Paper" ? "Scissors wins" : "Rock wins";
  }
}

function clearDisplay() {
  display.value = []
  compdisplay.value = []
  result.value =[]
}