

// ### Option One: CrystalsCollector Game (Recommended)

// ![Crystal Collector](Images/1-CrystalCollector.jpg)

// 1. [Watch the demo](homework_demos/crystalsCollector_demo.mp4).

$( document ).ready(function(){
    //    * The player will be shown a random number at the start of the game. // * The random number shown at the start of the game should be between 19 - 120.: MATH.RANDOM > ALERT. number array is 19 - 120
// Created a simple "alert" to get our bearings.
alert("See your number next to 'Match this Score'");
    // Computer generates random number for user to try to match
    var Random=Math.floor(Math.random()*120+19)
    
    // Display random number
    $('#scoreToMatch').text(Random);
    

// 2. The player will have to guess the answer, just like in Hangman. 
//This time, though, the player will guess with numbers instead of letters. 

// 3. Here's how the app works:

//    * There will be four crystals displayed as buttons on the page. // * Each crystal should have a random hidden value between 1 - 12.    
    //Generate random number for each crystal
    var num1= Math.floor(Math.random()*12+1)
    var num2= Math.floor(Math.random()*12+1)
    var num3= Math.floor(Math.random()*12+1)
    var num4= Math.floor(Math.random()*12+1)


//establlish array and variables
// var crystals = ["1", "2", "3", "4",];
// var userChoice = [];
// var randomNumberVar;
// var computerChoice;
var wins = 0;
var losses = 0; 
var userScore = 0;
// var guessesLeft = 9;
// var guessesSoFarVar = [];





//    * When the player clicks on a crystal, 
$("#crystals").on("click", ".crystal-image", function() {
//test alert
// alert("way to click that crystal!");
//(does this work>?????)  it will add a specific amount of points to the player's total score:   ONKEYUP > RANDOM NUMBER FROM    var computerOptions 
function randomCharacter() {
        var randomNumber = Math.floor(Math.random() * 
            options.length);
        computerChoice = options[randomNumber];
        
        console.log(computerChoice);
    }

});
// console.log(options);
//      * Your game will hide this amount until the player clicks a crystal: 
//      * When they do click one, update the player's score counter. var newScore.  Score = score + userChoice > ALERT.newScore

//    * The player wins if their total score matches the random number from the beginning of the game. if score === randomNumber then alert "you won!"

//    * The player loses if their score goes above the random number. if score > randomNumber then alert "Oops! You went over :("

//    * The game restarts whenever the player wins or loses. HOW TO DO THIS? FUNCTION?

//      * When the game begins again, the player should see a new random number. RESET number Display new number
//         Also, all the crystals will have four new hidden values. Run math.random again
//          Of course, the user's score (and score counter) will reset to zero. RESET SCORE. RESET VISIBLE COUNTER

//    * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
        //wins
        //losses



// Reset game
function reset(){
    Random=Math.floor(Math.random()*120+19);
    console.log(Random)
    $('#scoreToMatch').text(Random);
    num1= Math.floor(Math.random()*12+1);
    num2= Math.floor(Math.random()*12+1);
    num3= Math.floor(Math.random()*12+1);
    num4= Math.floor(Math.random()*12+1);
    userScore= 0;
    $('#totalScore').text(userScore);
    } 
// Display wins
function winning(){
alert("Hey! You won!");
wins++; 
$('#wins').text(wins);
reset();
}
// Display losses
function losing(){
alert ("Uh-Oh! You lost!");
losses++;
$('#losses').text(losses);
reset()
}
// Clicking crystals
$('.square').on ('click', function(){
    userScore = userScore + num1;
  console.log("New userScore= " + userScore);
  $('#totalScore').text(userScore); 
        //Win & lose conditions
      if (userScore == Random){
        winning();
      }
      else if ( userScore > Random){
        losing();
      }   
})  
$('.circle').on ('click', function(){
    userScore = userScore + num2;
  console.log("New userScore= " + userScore);
  $('#totalScore').text(userScore); 
      if (userScore == Random){
        winning();
      }
      else if ( userScore > Random){
        losing();
      } 
})  
$('.fancy').on ('click', function(){
    userScore = userScore + num3;
  console.log("New userScore= " + userScore);
  $('#totalScore').text(userScore);

        if (userScore == Random){
        winning();
      }
      else if ( userScore > Random){
        losing();
      } 
})  
$('.jabba').on ('click', function(){
    userScore= userScore + num4;
  console.log("New userScore= " + userScore);
  $('#totalScore').text(userScore); 
    
        if (userScore == Random){
        winning();
      }
      else if ( userScore > Random){
        losing();
      }
});   
});


// - - -

// ### Minimum Requirements

// Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed.

// - - -

// ### Create a README.md  DONE

// Add a `README.md` to your repository describing the project. Here are some resources for creating your `README.md`. Here are some resources to help you along the way:

// * [About READMEs](https://help.github.com/articles/about-readmes/)

// * [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

// - - -

// ### Add To Your Portfolio

// After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.

// - - -

// ### One More Thing

// If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

