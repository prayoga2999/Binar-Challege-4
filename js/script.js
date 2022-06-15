const rock = document.getElementById("r");
const paper = document.getElementById("p");
const sissors = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win() {
  alert("You Win");
}
function lose() {
  alert("You Lose");
}
function draw() {
  alert("It's Draw");
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win();
      break;
    case "rp":
    case "ps":
    case "sr":
      lose();
      break;
    case "rr":
    case "pp":
    case "ss":
      draw();
      break;
  }
}

function main() {
  rock.addEventListener("click", function () {
    game("r");
  });
  paper.addEventListener("click", function () {
    game("p");
  });
  sissors.addEventListener("click", function () {
    game("s");
  });
}
main();
