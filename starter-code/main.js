console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

//if (cardTwo === cardFour) {
//	alert ('You found a match!');
//} else if (cardTwo !== cardFour) {
//	alert ('Sorry, try again');
//}

var board = document.getElementById(game-board);

function createCards() {
	for (i=0; card.length; i++) {
		var gamecard = document.createElement('div');
		gamecard.className = 'card';
		board.appendChild(gamecard)
	}
}