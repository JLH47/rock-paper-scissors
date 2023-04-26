function getPlayerChoice() {
    const validInput = ["rock", "paper", "scissors"];
  
    while (true) {
      const userInput = prompt("Please choose Rock, Paper, or Scissors: ");
  
      const lowInput = userInput.toLowerCase();
  
      if (validInput.includes(lowInput)) {
        return lowInput;
      } else {
        alert("Invalid input, please try again!");
      }
    }
  }
  
  function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      console.log(`It's a draw! You and the computer both picked ${playerSelection}.`);
    } else if (
      playerSelection === "rock" && computerSelection === "scissors" ||
      playerSelection === "paper" && computerSelection === "rock" ||
      playerSelection === "scissors" && computerSelection === "paper"
    ) {
      playerWins++;
      console.log(`You won! You picked ${playerSelection} and the computer picked ${computerSelection}.`);
    } else {
      computerWins++;
      console.log(`The computer won! You picked ${playerSelection} and the computer picked ${computerSelection}.`);
    }
  }

  function game() {
    while (playerWins < 5 && computerWins < 5) {
      const playerChoice = getPlayerChoice();
      const computerChoice = getComputerChoice();
      playRound(playerChoice, computerChoice);
      console.log(`Score: Player ${playerWins} , Computer ${computerWins}`);
    }
    if (playerWins === 5) {
      console.log("Player won! Please refresh to restart.");
    }
    if (computerWins === 5) {
      console.log("Computer won! Please refresh to restart.");
    }
  }
  
  let playerWins = 0;
  let computerWins = 0;
  
  // Call the game function to start the game
  game();
  