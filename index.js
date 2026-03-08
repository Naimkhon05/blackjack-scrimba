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

let age = 22;
if (age < 21) {
  console.log("You cannot enter the club!");
} else {
  console.log("Welcome!");
}
