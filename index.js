let firstCard = 9;
let secondCard = 15;
let sum = firstCard + secondCard;
console.log(sum);
let hasBlackJack = false;
let isAlive = true;
let message = "";

if (sum <= 20) {
  message = "Do you want to draw a new card?";
} else if (sum === 21) {
  message = "You've got a blackjack!";
  hasBlackJack = true;
} else {
  message = "You're out of the game!";
  isAlive = false;
}
console.log(message);
