

var P1score = 0;
var CPUscore = 0;
var round = 1;

while (round <= 5) {

  alert("Round: " + round);
  console.log(round);

  var P1move = prompt("Choose one: Rock Paper Scissors");
  console.log(P1move);

  var CPUmove = Math.random();
  if (CPUmove <0.34){
      CPUmove = "rock";
  }else if(CPUmove <=0.67){
      CPUmove = "paper";
  }else if(CPUmove >=0.67){
      CPUmove = "scissors";
  }
  console.log(CPUmove);
  // win conditions
  if (P1move == "rock") {
    if (CPUmove == "rock") {
      Tie()
    }else if (CPUmove == "paper") {
      PaperWins()
      CPUWins()
    }else if (CPUmove == "scissors") {
      RockWins()
      P1Wins()
    }
  }

  if (P1move == "paper") {
    if (CPUmove == "rock") {
      PaperWins()
      P1Wins()
    }else if (CPUmove == "paper") {
      Tie()
    }else if (CPUmove == "scissors") {
      ScissorsWin()
      CPUWins()
    }
  }

  if (P1move == "scissors") {
    if (CPUmove == "rock") {
      RockWins()
      CPUWins()
    }else if (CPUmove == "paper") {
      ScissorsWin()
      P1Wins()
    }else if (CPUmove == "scissors") {
      Tie()
    }
  }
  round += 1;
  console.log("Player score: " + P1score + " " + "CPU score: " + CPUscore);
  alert("Player score: " + P1score + " " + "CPU score: " + CPUscore);
  if (P1score == 3 || CPUscore == 3) { break; }
}

function Tie() {
  alert("It's a tie");
}
function ScissorsWin() {
  alert("Scissors beat Paper");
}
function RockWins() {
  alert("Rock beats Scissors");
}
function PaperWins() {
  alert("Paper beats rock");
}
function CPUWins() {
  alert("CPU wins");
  CPUscore += 1;
}
function P1Wins() {
  alert("Player wins");
  P1score += 1;
}
