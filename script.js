//Game where user plays rock, paper, scissor against computer
//variable of user and computer
// R P & S in array with index number
//function has input for r, p or s
//computer randomnly selects option after user input on prompt screen
// need prompt for user to select followed by alert with computer selection followed by alert with result
//then need alert to show stats
//then need confirm to see if play a second round

//stats for wins, losses and ties
var wins = 0;
var losses = 0;
var ties = 0;

//options to be chosen from
var options = ['R', 'P', 'S'];

//function for game of rock paper scissors to be played
var rPS = function(){
    //user chooses from initial prompt
    var userChoice = prompt("Please choose either R, P or S");

    //convert to uppercase if chosen in lower
    userChoice = userChoice.toUpperCase();

    //if no choice made game ends
    if (!userChoice){
        return;
    }

    //randomly choose computer option
    var compIndex = Math.floor(Math.random() * options.length);
    var compChoice = options[compIndex];

    alert("The computer has chosen " + compChoice);

    //results returned depending on what selections have been made by user and computer
    if ((userChoice === "R" && compChoice === "S") || (userChoice === "P" && compChoice === "R") || (userChoice === "S" && compChoice === "P")) { 
        wins++;
        alert("You have won this game");
    } else if (userChoice === compChoice){
        ties++;
        alert("The game is a tie")
    } else {
        losses++
        alert("The computer has won")
    }

    //log stats for games played
    alert("Stats: Wins = " + wins + "\nLosses = " + losses + "\n Ties = " + ties);

    //ask user if they want to play again
    confirm("Do you want to play again?");

    //if confirm is true game restarts
    if (confirm){
        rPS()
    } else {
        return;
    };
        
}

//call function to start game
rPS()