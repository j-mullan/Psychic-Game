//  ------------------------------------------------
// Week 3 Homework - Psychic Game using Javascript |
// -------------------------------------------------

// Variables

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var chosenSoFar = [];
var letterChosen = [];

//==================================================

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Letter Selection here
var letterToBeGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];

//===================================================
// Console
console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + chosenSoFar + " Computer picked: " + letterToBeGuessed);

 
//====================================================
//  Arguments Here
//  Little too much C&P here (-__-)
//  https://www.w3schools.com/jsref/jsref_tolowercase.asp    
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
//  https://www.w3schools.com/jsref/met_doc_write.asp
//
  document.onkeyup = function(event) {
	var letterChosen = String.fromCharCode(event.keyCode).toLowerCase();
	if (chosenSoFar.indexOf(letterChosen) < 0 && alphabet.indexOf(letterChosen) >= 0) {
		chosenSoFar[chosenSoFar.length]=letterChosen;
		guessesLeft--;
	}
	if (letterToBeGuessed == letterChosen) {
    // Echoes and Prints
    console.log("You win!"); alert("You Win!");
    wins++ ;
		guessesLeft = 9;
		guessesSoFar = [];
		letterToBeGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Chosen so far: " + chosenSoFar + " Computer picked: " + letterToBeGuessed);
    document.write("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Chosen so far: " + chosenSoFar + " Computer picked: " + letterToBeGuessed);
  }
  
  // if (letterToBeGuessed != )

	if (guessesLeft == 0) {
    losses++;
    // Echoes and Prints
    console.log("You lost!"); alert("You lost...");
		guessesLeft = 9;
		chosenSoFar = [];
		letterToBeGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Chosen so far: " + chosenSoFar + " Computer picked: " + letterToBeGuessed);
    document.write("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Chosen so far: " + chosenSoFar + " Computer picked: " + letterToBeGuessed);
	}

  // Write to index.html
  // Dammit Damnit Dammit
  // ?? https://www.w3schools.com/jsref/met_doc_write.asp
	document.write() 

}

	// Need to right part for Game Restrt here....