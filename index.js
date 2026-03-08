let firstCard = 9;
let secondCard = 15;
let sum = firstCard + secondCard;
console.log(sum);
let hasBlackJack = false;
let isAlive = true;

if (sum <= 20) {
  console.log("Do you want to draw a new card?");
} else if (sum === 21) {
  console.log("You've got a blackjack!");
  hasBlackJack = true;
} else {
  console.log("You're out of the game!");
  isAlive = false;
}
console.log(hasBlackJack);
console.log(isAlive);

let age = 18;
if (age < 21) {
  document.getElementById("age").textContent = "You cannot enter the club!";
} else {
  document.getElementById("age").textContent = "Welcome!";
}
