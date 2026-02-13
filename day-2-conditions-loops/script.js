//Simple if-else
let age=19;

if (age>=18) {
    console.log("Eligible for vote");
} 
else{
    console.log("Not eligible");
}

//if-else ladder or multiple if-else

let marks=95;
if (marks>=90) {
    console.log("You got A grade");
}
else if(marks>=70){
    console.log("You got B grade");
}
else if(marks>=25){
    console.log("You got C grade");
}
else{
    console.log("You are failed");
}

//logical if-else

    let internalMarks=45;
    let attendence=25;
    if (internalMarks>=20 && attendence>=15) {
        console.log("You can give exam");
    }
    else{
        console.log("You can't give exam");
    }

    // loops

    for (let i=1; i<=5; i++){    
        console.log(i);
    }

    let j=1;
    while (j<=5) {
        console.log(j);
        j++;
    }
//1. print even numbers from 1 to 20

    for (let k = 1; k <=20; k++) {
        if (k%2===0) {
            console.log("even number:",k);
        }
    }

//2. count from 10 to 1 (reverse)

for (let a = 10; a >=1 ;a--) {
    console.log(a);
}

//3. sum of numbers from 1 to 10

let sum=0;
for (let i = 1; i <=10; i++){
    sum=sum+i;
}
 console.log(sum);

 //4. check if number is positive negative or zero

 let num=5;
 if (num>0) {
    console.log("positive");
 }
 else if (num<0) {
    console.log("negative");
 }
 else{
    console.log("zero");
 }

 //check if leap year (most important)

 let year=2026;
 if ((year%4===0 && year%100!==0) || year%400===0) {
    console.log("Leap year");
 }
 else{
    console.log("Not leap year");
 }