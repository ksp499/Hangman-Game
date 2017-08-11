// OBJECT CREATION
// ==============================================================================

var game = {
	win : 0,
	guess_left : 15,
	guess_done : [],
	guessed : false,
	letters : ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
	words : ["program", "javascript", "jquery", "computer", "laptop", "smu"],
	answer : "",
	blanks : "",
	answer_index : [],

	update_board : function() {
		document.querySelector("#win").innerHTML = "Wins: " + game.win;
		document.querySelector("#guess_left").innerHTML = "Number of Guesses Remaining: " + game.guess_left;
		document.querySelector("#guess_done").innerHTML = "Letters Already Guessed: " + game.guess_done;
	},

	reset_board : function() {
		game.guess_left = 15;
		game.guess_done = [];
		if (game.guessed) {
			game.win++;
		}
		game.guessed = false;
		game.answer = game.choose_words();
		//console.log(game.answer);
	},

	choose_words : function() {
		// choose random word from array
		var word = game.words[Math.floor(Math.random() * game.words.length)];
		// create right number of blanks
		for (var i = 0; i < word.length; i++) {
			game.blanks += "_";
		}
		return word;
	},

	// loop through word to check if pressed alphabet is part of the answer word.
	check_through_word : function(alpha)) {
		for (var i = 0; i < game.answer.length; i++) {
			if (game.answer[i] === alpha) {
				// Update the blanks when correct alphabet is found
				game.blanks[i] = alpha;
			}
		}
	},
};


// MAIN PROCESS
// ==============================================================================

// choose the answer
game.answer = game.choose_words();
//console.log(game.answer);

document.onkeyup = function(event) {

	var userInput = String.fromCharCode(event.keyCode).toLowerCase();

	check_through_word(userInput);

	//fill in found alphas


};



