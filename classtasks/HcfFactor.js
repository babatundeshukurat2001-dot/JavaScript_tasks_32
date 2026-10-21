const prompt = require('prompt-sync')();

let numbers = [];
let size = 0;

while (true) {
    let input = prompt("Enter your number (-1 to stop): ");

    if (input === null) break;
    if (input === "") continue;

    let num = +input;

    if (num === -1) break;
    if (num === num) {            
        numbers[size] = num;
        size = size + 1;
    }
}

let hcf = numbers[0];
if (hcf < 0) hcf = -hcf;

for (let count = 1; count < size; count++) {
    let a = hcf;
    let b = numbers[count];
    if (b < 0) b = -b;

    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    hcf = a;                      
}

console.log(`Numbers: [${numbers}]`);
console.log(`HCF is: ${hcf}`);
