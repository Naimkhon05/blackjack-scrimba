let firstCard = 9;
let secondCard = 10;
let sum = firstCard + secondCard;
console.log(sum);

if (sum < 21) {
  console.log("Do you want to draw a new card?");
} else if (sum === 21) {
  console.log("You've got a blackjack!");
} else {
  console.log("You're out of the game!");
}

let age = 18;
if (age < 21) {
  document.getElementById("age").textContent = "You cannot enter the club!";
} else {
  document.getElementById("age").textContent = "Welcome!";
}
