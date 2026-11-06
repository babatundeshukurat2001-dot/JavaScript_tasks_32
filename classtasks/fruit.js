const inventory = {
    apple: 10,
    banana: 5,
    orange: 8,
    mango: 12
};

let total = 0;

for (let fruit in inventory) {
    console.log(fruit + ": " + inventory[fruit]);
    total = total + inventory[fruit];
}

console.log("Total number of fruits: " + total);
