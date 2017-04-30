

//Computer chooses random word from array and displays the correct number of blanks for that word//
var wordOptions = ["winter", "baratheon", "dragon", "stark", "targaryen", "lannister",
					"wildling"];



	var winCounter = 0;

	var winCountDiv = document.getElementById("wins");
	winCountDiv.innerHTML = winCounter;


function startGame() {


//Counter for number of guesses remaining//
	var counter = 15;

	var counterDiv = document.getElementById("guessNumber");
	counterDiv.innerHTML = counter;

//reset the blanks for letters//
	var blankDiv = document.getElementById("blanks");

	blankDiv.innerHTML = "";
//reset the guessed letters array//
	var guessDiv = document.getElementById("guessed");
	guessDiv.innerHTML = "";


//computer randomly chooses word from wordOptions array//
	var wordChosen = wordOptions[Math.floor(Math.random()*wordOptions.length)];


	//alert("You've chosen " + wordChosen);

	for (var a = 0; a < wordChosen.length; a++) {

		blankDiv.innerHTML = blankDiv.innerHTML + "_";
		}

//array that keeps track of all the guessed letters//
	var allGuessArr = [];

//User guesses letter with keyboard//
	document.onkeyup = function(event) {
	

//keeps the actual guess of the user//
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

//Check if the letter has already been guessed//
		var duplicateCheck = allGuessArr.includes(userGuess);
		if (duplicateCheck === true) {
				return;
			}

//array that keeps track of the possible indexes that the guessed letter is on the chosen word//
		var possibleIndex = [];

//Computer checks if the guessed letter is in the chosen word and sends the position to array//
		for (var b = 0; b < wordChosen.length; b++) {
			if (userGuess == wordChosen[b]) {
				possibleIndex.push(b);
				}
			else {
				possibleIndex.push("");
				}	
			}


//if the guessed letter is in the word, computer replaces the correct blank with the letter//
		var newBlanks = "";	

		for (var d = 0; d < blankDiv.innerHTML.length; d++) {

			if (blankDiv.innerHTML[d] !== "_") {
				newBlanks += blankDiv.innerHTML[d];
			}
			
			if (d === possibleIndex[d]) {

				newBlanks += userGuess;
				
				console.log(newBlanks);
			}

			if (blankDiv.innerHTML[d] == "_" && d !== possibleIndex[d]) {

				 newBlanks += "_";
			}	

		}

		blankDiv.innerHTML = newBlanks;
		allGuessArr.push(userGuess);

		//Counter goes down by 1 each time a guess is made//
		counter--;
		counterDiv.innerHTML = counter;

		if (blankDiv.innerHTML === wordChosen) {

			winCounter++;
			winCountDiv.innerHTML = winCounter;
			
			alert("You guessed  " + wordChosen + " correctly! Try to guess the next word!")

			startGame();

		}

		if (counter === 0 && blankDiv.innerHTML !== wordChosen) {

			alert("You lost! Try again!");

			startGame();

		}

	//Place wrongly guessed letters in guessDiv//
		var guessArr = [];

		var letterCheck = wordChosen.includes(userGuess);

		if (letterCheck === false) {

		guessArr.push(" " + userGuess + " ");

		}
		//var guessDiv = document.getElementById("guessed");
		guessDiv.innerHTML = guessDiv.innerHTML + guessArr;

	}
}

startGame();




