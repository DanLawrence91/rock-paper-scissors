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

var match = function (){
    var userOption = prompt('Enter R, P or S')

    if(!userOption){
        return;
    }

    userOption = userOption.toUpperCase();

    var index = Math.floor(Math.random() * options.length);
    var compOption = options[index];

    alert('The computer chose ' + compOption)

    if (userOption === compOption){
        ties++;
        alert('This is a tie');
    } else if (
        (userOption === 'R' && compOption === 'S') ||
        (userOption === 'S' && compOption === 'P') ||
        (userOption === 'P' && compOption === 'R')
    ) {
        wins++;
        alert('You have won!')
    } else {
        losses++;
        alert('You have lost!')
    }

    alert('Stats: \nWins = ' + wins + '\nLosses = ' + losses + '\nTies = ' + ties)

    var nextRound = confirm('Do you want to play another game?')

    if (nextRound){
        match()
    }
}

match()