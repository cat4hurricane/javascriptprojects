let firstCard = 3;
let secondCard = 10;

let sum = firstCard + secondCard;
let hasBlackjack = false;

let isAlive = true;

let message = "";

function startGame() {
	if (sum <= 20) {
		message = "Do you want to draw a new card? 🙂";
	} 

	else if (sum === 21) {
		message = "You've got Blackjack! 🥳";
		hasBlackjack = true;
	}

	else {
		message = "You're out of the game! 😭";
		isAlive = false;
	}
}
//cashout time
console.log(hasBlackjack);
console.log(isAlive);
console.log(message);