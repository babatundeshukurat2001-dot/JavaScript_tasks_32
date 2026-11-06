const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 500 },
    { id: 4, name: "Desktop", price: 700 }
];

function findExpensiveProducts(products, threshold) {
    let result = [];

    for (let count = 0; count < products.length; count++) {
        if (products[count].price > threshold) {
            result.push(products[count]);
        }
    }

    return result;
}

console.log(findExpensiveProducts(products, 700));
