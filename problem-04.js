"use strict";
const calculateCartTotal = (products) => {
    let totle = 0;
    for (let product of products) {
        totle = totle + product.price;
    }
    return totle;
};
const products = calculateCartTotal([
    { name: "Keyboard", price: 1500 },
    { name: "Mouse", price: 800 },
    { name: "USB Cable", price: 300 }
]);
console.log(products);
let product2 = calculateCartTotal([
    { name: "Book", price: 500 },
    { name: "Pen", price: 50 },
    { name: "Bag", price: 1200 }
]);
console.log(product2);
