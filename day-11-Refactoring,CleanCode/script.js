// Character counter

let textarea=document.getElementById("text");
let countText=document.getElementById("count");

textarea.addEventListener("input",
    function(){
        let length= textarea.value.length;
        countText.innerText="Characters: "+length;
    }
)

//button disable

let Button=document.getElementById("btn");
let number=document.getElementById("num");
let countNumber=0;

Button.addEventListener("click",
    ()=>{
        countNumber=countNumber+1;
        number.innerText=countNumber;
        let Max_limit=5;
        if (countNumber===Max_limit) {
            // disable button once max limit is reached
            Button.disabled =true;
            number.innerText="Limit reached";
            number.style.color="red";
        }
    }
)

//theme toggle

let themebutton=document.getElementById("themebtn");

themebutton.addEventListener("click",
    ()=>{
        if (document.body.style.backgroundColor==="white") {
            
            document.body.style.backgroundColor="cyan";
        }else{
            document.body.style.backgroundColor="white";
        }
    }
)

// mini to-do

let task=document.getElementById("taskInput");
let addTask=document.getElementById("addTask");
let list=document.getElementById("list");

addTask.addEventListener("click",
    ()=>{
        let taskinput=task.value;
        if (taskinput==="") {
            return;
        }
        let li=document.createElement("li");
        li.style.color="blue";
        li.innerText=taskinput;
        list.appendChild(li);
        task.value="";
    }
)