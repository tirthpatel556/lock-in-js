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