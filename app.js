

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
      alert("It's a tie");
    }else if (CPUmove == "paper") {
      alert("Paper beats Rock");
      alert("CPU wins");
      CPUscore += 1;
    }else if (CPUmove == "scissors") {
      alert("Rock beats Scissors");
      alert("Player wins");
      P1score += 1;
    }
  }

  if (P1move == "paper") {
    if (CPUmove == "rock") {
      alert("Paper beats rock");
      alert("Player wins");
      P1score += 1;
    }else if (CPUmove == "paper") {
      alert("It's a tie");
    }else if (CPUmove == "scissors") {
      alert("Scissors beat Paper");
      alert("CPU wins");
      CPUscore += 1;
    }
  }

  if (P1move == "scissors") {
    if (CPUmove == "rock") {
      alert("Rock beats Scissors");
      alert("CPU wins");
      CPUscore += 1;
    }else if (CPUmove == "paper") {
      alert("Scissors beat Paper");
      alert("Player wins");
      P1score += 1;
    }else if (CPUmove == "scissors") {
      alert("It's a tie");
    }
  }
  round += 1;
  alert("Player score: " + P1score + " " + "CPU score: " + CPUscore);
  if (P1score == 3 || CPUscore == 3) { break; }
}
