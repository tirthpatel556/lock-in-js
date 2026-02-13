for (let i = 1; i <= 3; i++) {
    for (let j=1; j<=3; j++){
        console.log("i=",i,"j=",j);
    }
}
//star pyramid or star pattern
for (let i=1; i<=4;i++){
    let line="";
    for (let j=1;j<=i;j++){
        line+="* ";
    }
    
    console.log(line);
}
//star square
for (let i=1; i<=4;i++){
    let line="";
    for (let j=1;j<=4;j++){
        line+="* ";
    }
    console.log(line);
}
//number-pyramid
for (let i=1; i<=4;i++){
    let line="";
    for (let j=1;j<=i;j++){
        line+=j;
    }
    console.log(line);
}
// reverse star pattern
for (let i=1; i<=4;i++){
    let line="";
    for (let j=1;j<=4-i+1;j++){
        line+="* ";
    }
    console.log(line);
}
// number pattern
for (let i=1; i<=4;i++){
    let line="";
    for (let j=1;j<=i;j++){
        line+=i;
    }
    console.log(line);
}

