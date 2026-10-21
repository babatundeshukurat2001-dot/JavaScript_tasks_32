//const prompt = require('prompt-sync')();
//
//let number = prompt("Enter a number:");
//
//while (number >= 10) {
//
//  let sum = 0;
//
//  while (number > 0) {
//
//    let digit = number % 10;
//
//    sum = sum + digit;
//
//    number = (number - digit) / 10;
//  }
//  number = sum;
//}
//
//console.log(number);
//




const prompt = require('prompt-sync')();

let number = Number(prompt("Enter a number: "));

let isNegative = number < 0;

if (isNegative) {
  number = number * -1;
}

while (number >= 10) {
  let sum = 0;
  let firstDigit = Number(String(number)[0]);

  while (number > 0) {
    let digit = number % 10;

    sum += digit;

    number = (number - digit) / 10;
  }

  if (isNegative) {
    sum = sum - 2 * firstDigit;
    isNegative = false;
  }

  number = sum;

  if (number < 0) {
    number = number * -1;
  }
}

console.log(number);


