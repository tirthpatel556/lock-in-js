//number guessing game
let seceratenumber= Math.floor(Math.random() * 10)+1;
let guess=prompt("guess a number between 1-10");
 guess=Number(guess);
if (guess===seceratenumber) {
    alert("congratulations!");
}
else {
    alert("you lose"+seceratenumber);
}

