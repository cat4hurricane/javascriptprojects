//variable declare for global use
let cards = []; //array
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

//restart blackjack
console.log(cards);
//functiion declarations
function getRandomCard() {
	let randomCard = Math.floor(Math.random() * 13)+1;
	if (randomCard > 10) {
		return 10;
	} 
	else if (randomCard === 1) {
		return 11;
	}
	else {
		return randomCard;
	}
}

function startGame() {
	isAlive = true;
	let firstCard = getRandomCard();
	let secondCard = getRandomCard();
	cards = [firstCard, secondCard];
	sum = firstCard + secondCard;
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
	if (isAlive === true && hasBlackjack === false) {
	console.log("Drawing a new card from the deck!");	
	//variable for pulled card
	let card = getRandomCard();
	//add to sum
	sum+= card;
	cards.push(card);
	//rerun renderGame()
	renderGame();
	}
}
//cashout time
console.log(hasBlackjack);
console.log(isAlive);
