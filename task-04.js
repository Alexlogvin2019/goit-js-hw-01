"use strict";
let credits = 23580;
const pricePerDroid = 3000;
let message;

const numbersDroids = prompt("Количество дроидов?");

const totalPrice = numbersDroids * pricePerDroid;
const balanceCredits = credits - totalPrice;

if (numbersDroids === null) {
  message = "Отменено пользователем!";
} else if (totalPrice > credits) {
  message = "Недостаточно средств на счету!";
} else {
  message = `Вы купили ${numbersDroids} дроидов, на счету осталось ${balanceCredits} кредитов.`;
}
console.log(message);