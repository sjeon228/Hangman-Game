var wordOptions = ["direwolf", "baratheon", "dragon", "stark", "targareon", "lanister",
					"wildling"];


	var wordChosen = wordOptions[Math.floor(Math.random()*wordOptions.length)];


	alert("You've chosen " + wordChosen);

	var blanks = wordChosen.replace(/./g, " _ ");

	console.log(blanks);

	//var split = wordChosen.split("");

	//alert(split);

//var replaceLetters = function(x) {
	//for (var i = 0; i < wordChosen.length; i++) {
		//var test = wordChosen.replace(wordChosen[i],"_");

		//console.log(test);
	//}

		//alert(replaceLetters);

	//var test = split.fill(" _ ");
		//alert(test);
	


//replaceLetters();

	//var blanks = wordChosen.replace(wordChosen, 1*wordChosen.length);

	//alert(blanks);

	var currentWord = "<p>Current Word:</p>" +
					"<p>" + blanks + "</p>";

	document.querySelector('#currentWord').innerHTML = currentWord;






document.onkeyup = function(event) {

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	alert(userGuess);
}