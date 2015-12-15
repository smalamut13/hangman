// The word is FOX
var word = ['f', 'o', 'x'];
var correctGuesses = [];
// Get user input as a letter

// Test if the letter is in the word FOX
function checkGuess(guessedLetter) {
for(var i = 0; i < word.length; i++) {
if (word[i] === guessedLetter) {
	correctGuesses.push(guessedLetter);
		}
	}
}

// Keep getting user input until they guess all the letters F, O, X
console.log('game starting');
while (correctGuesses.length !== word.length) {
	var userGuess = prompt('Guess a letter');
	checkGuess(userGuess);
}
console.log('game over');


console.log(correctGuesses);
checkGuess('a');  // should log 'nope'
console.log(correctGuesses);
checkGuess('f');  // should log 'yup'
console.log(correctGuesses); 


