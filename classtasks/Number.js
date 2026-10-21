const prompt = require('prompt-sync')();

let number = prompt("Enter a number:");

while (number >= 10) {

  let sum = 0;

  while (number > 0) {

    let digit = number % 10;

    sum = sum + digit;

    number = (number - digit) / 10;
  }
  number = sum;
}

console.log(number);



