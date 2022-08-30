//variable declare for global use
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard]; //array
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function getRandomCard() {
	return 5;
}

function startGame() {
	renderGame();
}

	//function that lets you play
function renderGame() {
	//card counting, showsmup on screen
	cardsEl.textContent = "Cards: ";
	for (let i = 0; i < cards.length; i++) {
		cardsEl.textContent += cards[i] + " ";
	}
	sumEl.textContent = "Sum: " + sum;
	if (sum <= 20) {
	//less than 21
		message = "Do you want to draw a new card?";
		//see newCard() function
	} 

	else if (sum === 21) {
	//21 achieved, game won
		message = "You've got Blackjack!";
		hasBlackjack = true;
	}

	else {
	//bigger than 21, game ends
		message = "You're out of the game!";
		isAlive = false;
	}
	messageEl.textContent = message;
}
	//drawing new card function
function newCard() {
	console.log("Drawing a new card from the deck!");	
	//variable for pulled card
	let card = getRandomCard();
	//add to sum
	sum+= card;
	cards.push(card);
	//rerun renderGame()
	renderGame();
}
//cashout time
console.log(hasBlackjack);
console.log(isAlive);
