// Intro Pop up
Swal.fire({
  title: "First to get 12 points wins the game! :>",
  showClass: {
    popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
  },
  hideClass: {
    popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
  },
});
// Player's Board Variable & Functions
let rock_player_choice_board = document.querySelector(
  ".rock_player_choice_board"
);
let paper_player_choice_board = document.querySelector(
  ".paper_player_choice_board"
);
let scissor_player_choice_board = document.querySelector(
  ".scissor_player_choice_board"
);

// Player's Board Hover Effect
rock_player_choice_board.addEventListener("mouseover", () => {
  rock_player_choice_board.style.backgroundColor = "lightgreen";
});
rock_player_choice_board.addEventListener("mouseout", () => {
  rock_player_choice_board.style.backgroundColor = "";
});
paper_player_choice_board.addEventListener("mouseover", () => {
  paper_player_choice_board.style.backgroundColor = "lightgreen";
});
paper_player_choice_board.addEventListener("mouseout", () => {
  paper_player_choice_board.style.backgroundColor = "";
});
scissor_player_choice_board.addEventListener("mouseover", () => {
  scissor_player_choice_board.style.backgroundColor = "lightgreen";
});
scissor_player_choice_board.addEventListener("mouseout", () => {
  scissor_player_choice_board.style.backgroundColor = "";
});

// Player & Computer Scores
let playerScore = 0;
let ComputerScore = 0;
let computer_score = document.getElementById("computer-score");
let player_score = document.getElementById("player-score");
let finalComputerChoice; //Declared this as global so that player board eventlistener() can use them

// Arrays of Player's Choices
let arrayOfPC = ["rock", "paper", "scissor"];

// Click Events for Player's Board

//Player's Rock Board
rock_player_choice_board.addEventListener("click", () => {
  finalComputerChoice = getComputerChoice(arrayofCC);
  console.log(`Player Choice : ${arrayOfPC[0]}`);
  console.log("Computer's choice : " + finalComputerChoice);
  if (finalComputerChoice === arrayOfPC[0]) {
    console.log("Its a Tie");
    resetComputerChoice(
      rock_computer_choice_board,
      paper_computer_choice_board,
      scissor_computer_choice_board
    );
    addScoreEffectTXTWhenTie(player_score, computer_score);
  } else if (finalComputerChoice === arrayOfPC[1]) {
    addComputerScore();
    console.log("Computer Wins");
    resetComputerChoice(
      paper_computer_choice_board,
      rock_computer_choice_board,
      scissor_computer_choice_board
    );

    addScoreTXTEffectOnLoser(player_score);
  } else if (finalComputerChoice === arrayOfPC[2]) {
    addPlayerScore();
    console.log("Player Wins");
    resetComputerChoice(
      scissor_computer_choice_board,
      rock_computer_choice_board,
      paper_computer_choice_board
    );
    addScoreEffectTXTOnWinner(player_score);
    addScoreTXTEffectOnLoser(computer_score);
  }

  resetGame();
});

// Player's Paper Board
paper_player_choice_board.addEventListener("click", () => {
  finalComputerChoice = getComputerChoice(arrayofCC);
  console.log(`Player Choice : ${arrayOfPC[1]}`);
  console.log("Computer's choice : " + finalComputerChoice);
  if (finalComputerChoice === arrayOfPC[1]) {
    console.log("Its a Tie");
    resetComputerChoice(
      paper_computer_choice_board,
      rock_computer_choice_board,
      scissor_computer_choice_board
    );
    addScoreEffectTXTWhenTie(player_score, computer_score);
  } else if (finalComputerChoice === arrayOfPC[0]) {
    console.log("Player Wins!");
    addPlayerScore();
    resetComputerChoice(
      rock_computer_choice_board,
      paper_computer_choice_board,
      scissor_computer_choice_board
    );
    addScoreEffectTXTOnWinner(player_score);
    addScoreTXTEffectOnLoser(computer_score);
  } else if (finalComputerChoice === arrayOfPC[2]) {
    console.log("Computer Wins!");
    addComputerScore();
    resetComputerChoice(
      scissor_computer_choice_board,
      paper_computer_choice_board,
      rock_computer_choice_board
    );
    addScoreEffectTXTOnWinner(computer_score);
    addScoreTXTEffectOnLoser(player_score);
  }
  resetGame();
});

// Player's Scissor Board
scissor_player_choice_board.addEventListener("click", () => {
  finalComputerChoice = getComputerChoice(arrayofCC);
  console.log(`Player Choice : ${arrayOfPC[2]}`);
  console.log("Computer's choice : " + finalComputerChoice);
  if (finalComputerChoice === arrayOfPC[2]) {
    console.log("Its a Tie");
    resetComputerChoice(
      scissor_computer_choice_board,
      rock_computer_choice_board,
      paper_computer_choice_board
    );
    addScoreEffectTXTWhenTie(player_score, computer_score);
  } else if (finalComputerChoice === arrayOfPC[0]) {
    console.log("Computer Wins!");
    addComputerScore();
    resetComputerChoice(
      rock_computer_choice_board,
      paper_computer_choice_board,
      scissor_computer_choice_board
    );
    addScoreEffectTXTOnWinner(computer_score);
    addScoreTXTEffectOnLoser(player_score);
  } else if (finalComputerChoice === arrayOfPC[1]) {
    console.log("Player Wins!");
    addPlayerScore();
    resetComputerChoice(
      paper_computer_choice_board,
      scissor_computer_choice_board,
      rock_computer_choice_board
    );
    addScoreEffectTXTOnWinner(player_score);
    addScoreTXTEffectOnLoser(computer_score);
  }
  resetGame();
});

// Computer Board Choices & Functions
let rock_computer_choice_board = document.querySelector(
  ".rock_computer_choice_board"
);

let paper_computer_choice_board = document.querySelector(
  ".paper_computer_choice_board"
);

let scissor_computer_choice_board = document.querySelector(
  ".scissor_computer_choice_board"
);

// Arrays of Computer Choices
let arrayofCC = [
  rock_computer_choice_board,
  paper_computer_choice_board,
  scissor_computer_choice_board,
];

// Function that will get the array of computer choices (randomize) & spits out there value
function getComputerChoice(cChoice) {
  let randomComputerCHoice =
    cChoice[Math.floor(Math.random() * cChoice.length)];
  if (randomComputerCHoice === rock_computer_choice_board) {
    let computerRock = "rock";
    return computerRock;
  } else if (randomComputerCHoice === paper_computer_choice_board) {
    let computerPaper = "paper";
    return computerPaper;
  } else if (randomComputerCHoice === scissor_computer_choice_board) {
    let computerScissor = "scissor";
    return computerScissor;
  }
}

// Color Effects when Scores are Updating
function addScoreEffectTXTWhenTie(player, computer) {
  player.style.color = "lightseagreen";
  computer.style.color = "lightseagreen";
  setTimeout(() => {
    player.style.color = "";
    computer.style.color = "";
  }, 1000);
}

function addScoreEffectTXTOnWinner(winner) {
  winner.style.color = "lightgreen";
  setTimeout(() => {
    winner.style.color = "";
  }, 1000);
}

function addScoreTXTEffectOnLoser(loser) {
  loser.style.color = "lightcoral";
  setTimeout(() => {
    loser.style.color = "";
  }, 1000);
}

// Resets computer choice via bg color (first parameter: stays lightcoral, second parameter: reset bg color, third parameter: reset bg color)
function resetComputerChoice(computerChoice, reset1, reset2) {
  computerChoice.style.backgroundColor = "lightcoral";
  reset1.style.backgroundColor = "";
  reset2.style.backgroundColor = "";
  setTimeout(() => {
    computerChoice.style.backgroundColor = "";
  }, 1000);
}

// Functions that Adds the Player & Computer Score
function addComputerScore() {
  ComputerScore++;
  computer_score.textContent = ComputerScore;
}

function addPlayerScore() {
  playerScore++;
  player_score.textContent = playerScore;
}

// Game restarts when player or computer score === 12, determining the winner
function resetGame() {
  if (playerScore === 3) {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Player Won!",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      // Reset to 0 after the SweetAlert finishes
      playerScore = 0;
      player_score.textContent = playerScore;
      ComputerScore = 0;
      computer_score.textContent = ComputerScore;
    });
  } else if (ComputerScore === 3) {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Computer Won!",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      // Reset to 0 after the SweetAlert finishes
      playerScore = 0;
      player_score.textContent = playerScore;
      ComputerScore = 0;
      computer_score.textContent = ComputerScore;
    });
  }
}
