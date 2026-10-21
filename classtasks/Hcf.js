const prompt = require('prompt-sync')();

let numbers = [];

while (true) {
    let input = prompt("Enter your number (-1 to stop): ");

    if (input === null) break;          
    if (input.trim() === "") continue;  

    let num = Number(input);

    if (num === -1) break;
    if (!isNaN(num)) numbers.push(num);
}

if (numbers.length === 0) {
    console.log("No numbers entered!");
} else {
    let hcf = Math.abs(numbers[0]);

    for (let count = 1; count < numbers.length; count++) {
        let index = hcf;
        let num = Math.abs(numbers[count]);
        while (num !== 0) {
            let temp = num;
            num = index % num;
            index = temp;
        }
        hcf = index;
    }

    console.log(`Numbers: [${numbers}]`);
    console.log(`HCF is: ${hcf}`);
}
