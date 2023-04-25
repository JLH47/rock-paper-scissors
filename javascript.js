const choices = ["Rock" , "Paper" , "Scissors"];
const random = Math.floor(Math.random() * choices.length);

let getComputerChoice = () =>{
    return choices[random];
};

console.log(getComputerChoice());

//function playRound(playerSelection, computerSelection) {
    // your code here!

  //}
   
 // const playerSelection = "rock";
 // const computerSelection = getComputerChoice();
 // console.log(playRound(playerSelection, computerSelection));
