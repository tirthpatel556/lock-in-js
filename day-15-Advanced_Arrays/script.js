// map()

let price=[100,200,300];
let taxed_prices=price.map(function(tax){
    return tax+(tax*10/100);
});
console.log(taxed_prices);

// filter()

let scores=[45,80,32,90,60];
let high_scores=scores.filter(function(high){
    return high>50;
});
console.log(high_scores);

// find()

let numbers=[5,10,15,20];
let greater_number=numbers.find(function(greater){
    return greater>12;
});
console.log(greater_number);

//reduce()

let prices=[100,200,300];
let total=prices.reduce(function(accumlator,current){
    return accumlator+current;
},0);
console.log(total);