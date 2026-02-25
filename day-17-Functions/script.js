// task-1

function multiply(a,b) {
    return a*b;
}
let results=multiply(3,4);
console.log(results);

// task-2

function isEven(num) {
    return num%2===0;
}
let number=isEven(5);
console.log(number);

// task-3

function calculateTax(price) {
    return (price*10/100);
}
function calculateFinalPrice(price) {
    return price+calculateTax(price);
}
let cost=calculateFinalPrice(100);
console.log(cost);

// task-4

function getFinalPrice(Price) {
    return Price+Price*0.1;
}
let item_1=getFinalPrice(100);
let item_2=getFinalPrice(250);
let item_3=getFinalPrice(400);
console.log(item_1,item_2,item_3);

// task-5

function getDiscount(price){
    return price>=500 ? price*0.20 : price*0.10;
}
function getFinalAmount(price) {
    return price-getDiscount(price);
}
let Item_1=getFinalAmount(300);
let Item_2=getFinalAmount(500);
let Item_3=getFinalAmount(1000);
console.log(Item_1,Item_2,Item_3);