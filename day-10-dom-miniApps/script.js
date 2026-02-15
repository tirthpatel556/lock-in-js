// Character counter
let textarea=document.getElementById("text");
let count=document.getElementById("count");

textarea.addEventListener("input",
    function(){
        let length= textarea.value.length;
        count.innerText="Characters: "+length;
    }
)

//button disable

let button=document.getElementById("btn");
let number=document.getElementById("num");
let add=0;

button.addEventListener("click",
    ()=>{
        add=add+1;
        number.innerText=add;
        if (add>5) {
            button.disabled =true;
            number.innerText="Limit reached";
        }
    }
)

//theme toggle

let themebutton=document.getElementById("themebtn");
let toggle=document.getElementById("toggle");

themebutton.addEventListener("click",
    ()=>{
        if (ocument.body.style.backgroundColor==="white") {
            
            document.body.style.backgroundColor="cyan";
        }else{
            document.body.style.backgroundColor="white";
        }
    }
)

// 