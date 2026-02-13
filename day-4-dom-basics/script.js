let heading=document.getElementById("title");
let button=document.getElementById("btn");

console.log(heading);
console.log(button);

heading.innerText="DOM is working!";
heading.style.color="blue";
heading.style.fontSize="32px";

button.addEventListener("click",
    function(){
        heading.innerText="congratulations button is working";
        document.body.style.backgroundColor="cyan";
    }
)
//task-1 text toggle
let text=document.getElementById("text");
let togglebtn=document.getElementById("toggleBtn");

togglebtn.addEventListener("click",
    function() {
        if (text.innerText==="Off"){
            text.innerText="On";
            
        }else{
            text.innerText="Off";
        }
    }
)
//task-2 increase font size
let increasetext=document.getElementById("textincrease");
let buttonincrease=document.getElementById("sizebtn");
let size=16;
buttonincrease.addEventListener("click",
    function(){
        size=size+2;
        increasetext.style.fontSize=size+"px";
    }
)
//task-3 change color on every click

let colorchange=document.getElementById("colorbtn");
let textcolor=document.getElementById("colortext")
let colorarr=["red","blue","green","purple"];
let index=0;
colorchange.addEventListener("click",
    function(){
        textcolor.style.color=colorarr[index];
        index=index+1;
        if (index===colorarr.length) {
            index=0;
        }
    }
)
//task-4 show/hide text

let textvisibility=document.getElementById("visibilitytext");
let textbutton=document.getElementById("hidetext");
textbutton.addEventListener("click",
   function(){
    if (textbutton.style.display==="none") {
    textvisibility.style.display="block";
}else{
    textvisibility.style.display="none";
}
   } 
)
//task-5 count button

let counttext=document.getElementById("count");
let countbutton=document.getElementById("increasebtn");
let number=0;

countbutton.addEventListener("click",
    function() {
        counttext.innerText=number;
        number=number+1;
        if (number===10) {
            countbutton.innerText="limit reached";
            countbutton.style.color="red"
        }
        
    }
)