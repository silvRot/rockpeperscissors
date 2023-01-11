let userScore = 0;
let computerScore = 0;

const htmlComputerScore = document.getElementById("computer-score");
const htmlUserScore = document.getElementById("user-score");
const result = document.querySelector(".writing");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

function computerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

function win(userChoice, computerChoice) {
  userScore++;
  htmlUserScore.innerHTML = userScore;
  htmlComputerScore.innerHTML = computerScore;
  result.innerHTML =
    userChoice +
    " " +
    "aggressively beats" +
    " " +
    computerChoice +
    " " +
    "you WON!!";
  if (userScore > 9 && computerScore <= 9) {
    result.innerHTML = "YOU WON!!";
    computerScore = 0;
    return (userScore = 0);
  }
}
function lose(computerChoice, userChoice) {
  computerScore++;
  htmlComputerScore.innerHTML = computerScore;
  htmlUserScore.innerHTML = userScore;
  result.innerHTML =
    computerChoice + " " + "runs from" + " " + userChoice + " " + "you LOSE!!";
  if (computerScore > 9 && userScore <= 9) {
    result.innerHTML = "YOU LOST!!";
    userScore = 0;
    return (computerScore = 0);
  }
}

function draw(userChoice, computerChoice) {
  result.innerHTML =
    userChoice +
    " " +
    "hugs his mate" +
    " " +
    computerChoice +
    ", " +
    "it's cute but... draw!";
}

function play(userChoice) {
  const game = computerChoice();
  switch (userChoice + game) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, game);
      break;
    case "paperscissors":
    case "scissorsrock":
    case "rockpaper":
      lose(userChoice, game);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, game);
      break;
  }
}

rock.addEventListener("click", function () {
  play("rock");
});

paper.addEventListener("click", function () {
  play("paper");
});

scissors.addEventListener("click", function () {
  play("scissors");
});
