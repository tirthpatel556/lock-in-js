// variables-Data type
let name="Tirth";
let age=19;
let isStudent=true;

console.log(name,age,isStudent);
console.log(typeof(name,age,isStudent)); //by using comma js reads it as comma operator and return the last value so it ignores name and age hence the answer is boolean cause last one is isStudent
console.log(typeof(5+"5")); // + in js cosidered as string other -*/ are number.
console.log(typeof(5-"5"));
console.log(5+"5");
console.log(5+5);

console.log(typeof("10"*2));
console.log(typeof("10"/2));
console.log(typeof("10"+2));

// conditions

let mark=50;
if (mark>=21){
    console.log("you're passed");
}
else{
    console.log("you're failed");
}

//Loops

for (let i=1; i<=5;i++){
    console.log("Number:",i);
}

//fuctions

function add(a,b){
    return a+b;
}
function multiply(a,b){
    return a*b;
}
console.log(add(4,6));
console.log(multiply(4,6));

//practice-session

// 1. Even / Odd checker
// 2. Find the largest of 3 numbers
// 3. Print numbers 1-10 using loops
// 4.Function to calculate square of number

//1.
let number=4;
if (number%2===0){
    console.log("even");
}
else{
    console.log("odd");
}

//2.
let a=2;
let b= 4;
let c=6;

if(a===b && b===c){
    console.log("all are equal");
}
else if(a<=b && b<=c){
    console.log("c is greater:",c);
}
else if(a<=b && b>=c){
    console.log("b is greater:",b);
}
else if(a>=b && a>=c){
    console.log("a is greater:",a);
}

//3.
for (let j=1; j<=10;j++){
    console.log(j);
}

//4.
function square(a){
    return a*a;
}
console.log(square(25));

//Reality Exercise

let HoursPerDay=3;
let days=180;
console.log("Total hours:",HoursPerDay*days);