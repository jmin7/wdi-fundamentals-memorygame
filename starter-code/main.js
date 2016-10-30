console.log("JS file is connected to HTML! Woo!")

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = []

var board = document.getElementById('game-board');

function createBoard () {
	for (i=0; i < cards.length; i +=1);
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card',cards[i]);
		cardElement.addEventListener('click', isTwoCards);

	board.appendChild(cardElement);
	board.appendChild(cardElement);
}


function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));

	console.log(this.getAttribute('data-card'));
if (this.getAttribute('data-card') === 'king') {
	this.innerHTML = '<img src="starter-code\King.png" alt="King of Dia" />';
} else {this.innerHTML = '<img src="starter-code\Queen.png" alt="Queen of Spade" />';
}

	if (cardsInPlay.length === 2){
		isMAtch(cardsInPlay);
			cardsInPlay = [];
	}
}

function isMatch(cards) {
	if (card[0] === card[1]){
	alert("You found a match!");
} else {
	alert("Sorry, try again");
}
}

createBoard();


/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardTwo === cardFour) {
	alert ('You found a match!');
} else if (cardTwo !== cardFour) {
	alert ('Sorry, try again');
}

var board = document.getElementById(game-board);

function createCards() {
	for (i=0; card.length; i++) {
	var gamecard = document.createElement('div');
	gamecard.className = 'card';
	board.appendChild(gamecard)
	}
}*/