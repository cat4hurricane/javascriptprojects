let firstCard = 3;
let secondCard = 10;

let sum = firstCard + secondCard;
let hasBlackjack = false;

let isAlive = true;

if (sum <= 20) {
	console.log("Do you want to draw a new card? 🙂");
} 

else if (sum === 21) {
	console.log("You've got Blackjack! 🥳");
	hasBlackjack = true;
}

else {
	console.log("You're out of the game! 😭");
	isAlive = false;
}

//cashout time
console.log(hasBlackjack);
console.log(isAlive);