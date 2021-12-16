//Game where user plays rock, paper, scissor against computer
//variable of user and computer
// R P & S in array with index number
//function has input for r, p or s
//computer randomnly selects option after user input on prompt screen
// need prompt for user to select followed by alert with computer selection followed by alert with result
//then need alert to show stats
//then need confirm to see if play a second round

let wins = 0
let losses = 0
let ties = 0
//array for options
let options = ['R', 'P', 'S'];

var playGame = function (){
    var userChoice = prompt('Enter R, P or S')

    if(!userChoice){
        return;
    }

    userChoice = userChoice.toUpperCase();

    var index = Math.floor(Math.random() * options.length);
    var compChoice = options[index];

    alert('The computer chose ' + compChoice)

    if (userChoice === compChoice){
        ties++;
        alert('This is a tie');
    } else if (
        (userChoice === 'R' && compChoice === 'S') ||
        (userChoice === 'S' && compChoice === 'P') ||
        (userChoice === 'P' && compChoice === 'R')
    ) {
        wins++;
        alert('You have won!')
    } else {
        losses++;
        alert('You have lost!')
    }

    alert('Stats: \n Wins = ' + wins + '\nLosses = ' + losses + '\nTies = ' + ties)

    var playAgain = confirm('Play Again?')

    if (playAgain){
        playGame()
    }
}

playGame()