// let button = document.querySelector("button");

// // likeBtn = document.addEventListener("click",
// //     ()=>{

// //         likeBtn.innerHTML ="liked";
// //     }
// // );

// function sayHello(){
//     console.log("hello");
// }

// button.addEventListener("click",
//     ()=>{
//         sayHello();
//     }
// );
//on key enter
// function sayHello(){
//     console.log("hello");
// }

// let btn = document.querySelectorAll("button");
// for (let button of btn) {
//     button.onclick = sayHello;
// }

// on mouse enter
// function sayHello(){
//     console.log("you clicked button");
// }

// let btn = document.querySelectorAll("button");
// for (let button of btn) {
//     button.onmouseenter = sayHello;
// }

// double function :- here second function runs.

// function sayHello(){
//     console.log("you clicked button");
// }

// function saynName() {
//     console.log("my name is tirth");
// }

// let btn = document.querySelectorAll("button");
// for (let button of btn) {
//     button.onclick = sayHello;    // not run
//     button.onclick = saynName;   //  run
// }

//there is a problem in onclick methos cause we cant call multiple functions
// solution is addEventListner

// let btn = document.querySelector("button");

// btn.addEventListener("click",
//     ()=>{
//         sayHello;
//         saynName;
//     }
// );

// let btn = document.querySelectorAll("button");

// function sayHello(){
//     console.log("you clicked button");
// }

// function saynName() {
//     console.log("my name is tirth");
// }

// for (let button of btn) {
//     button.addEventListener("click",sayHello);
//     button.addEventListener("click",saynName);
// }

// double click

// let btn = document.querySelectorAll("button");

// function sayHello(){
//     console.log("you clicked button");
// }

// function saynName() {
//     console.log("my name is tirth");
// }

// for (let button of btn) {
//     button.addEventListener("dblclick",sayHello);
//     button.addEventListener("dblclick",saynName);
// }

// let paragraph = document.querySelector("p");

// paragraph.addEventListener("click",
//     ()=>{
//         console.log("clicked");
//     }
// );

// let box = document.querySelector("#box");

// box.addEventListener("mouseenter",
//     ()=>{
//         console.log("i enterd in box");
//     }
// );

// this keyword in event listner

// let button = document.querySelector("button");

// button.addEventListener("dblclick",
//     function(e){
//         console.log(e);
//         console.dir(e);
//     }
// )

// let inputText = document.querySelector("input");
// let button = document.querySelector("button");

// inputText.addEventListener("keydown",                //keyup = when key lifted; key = when key pressed
//     (e)=>{

//             console.log("clicked");
//             console.log(e);
//             console.log(e.key);
//         }

// );

// let inputText = document.querySelector("input");
// let button = document.querySelector("button");
// inputText.addEventListener("keydown",                          //keyup = when key lifted; key = when key pressed

//   (e) => {
//     if (e.key === "ArrowLeft") {
//       console.log("character moved left");
//     } else if (e.key === "ArrowRight") {
//       console.log("character moved right");
//     } else if (e.key === "ArrowUp") {
//       console.log("character moved up");
//     } else if (e.key === "ArrowDown") {
//       console.log("character moved down");
//     }
//   },
// );


// let inputText = document.querySelector("input");
// let button = document.querySelector("button");
// inputText.addEventListener("keydown",            

//   (e) => {
//     if (e.code === "KeyL") {
//       console.log("character moved left");
//     } else if (e.code === "KeyR") {
//       console.log("character moved right");
//     } else if (e.code === "KeyU") {
//       console.log("character moved up");
//     } else if (e.code === "KeyD") {
//       console.log("character moved down");
//     }
//   },
// );

// let inputText = document.querySelector("input");
// let submitBtn = document.querySelector("button");
// let form = document.querySelector("form");

// form.addEventListener("submit",
//     function(e){
//         e.preventDefault();          //handles the action error
//         console.log("form submitted");
//     }
// );

                            // Extraeting form date
                  
// let inputText = document.querySelector("input");
// let submitBtn = document.querySelector("button");
// let form = document.querySelector("form");

// form.addEventListener("submit",
//     function(e){
//         e.preventDefault();
//         console.log("form submitted");
//         console.log(inputText);
//         console.log(inputText.innerText);
//         console.dir(inputText.value);
//     }
// );    

// let form = document.querySelector("form");
// let password = document.querySelector("#password");
// let userInput = document.querySelector("#username");
// let submit = document.querySelector("button");

// form.addEventListener("submit",
//     (e)=>{
//         e.preventDefault();
//         let user = userInput.value;
//         let userPassword = password.value;
//         console.log(user,userPassword);
//         console.log("form submitted");
//         alert(`Hi ${user} your password is ${userPassword}`);
//     }
// );

                        // Event-Bubbling // 
// 

// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let li = document.querySelectorAll("li");

// div.addEventListener("click",
//    function(event){
//     event.stopPropagation();           //stop propogation prevents bubbling
//         console.log("div clicked");
//     }
// );

// ul.addEventListener("click",
//     function(event){
//         event.stopPropagation();
//         console.log("ul clickeed");
//     }
// );

// for (let list  of li) {
//     list.addEventListener("click",
//         function(event){
//             event.stopPropagation();
//             console.log("list clicked");     //when you click li all the perent clicked ex. ul and div also clicked
//         }
//     );
// }

                            // js call stack //
//

// function hello(){
//     console.log("inside hello finction");
//     console.log("hello");
// }

// function demo(){
//     console.log("hello function calling");
//     hello();
// }

// console.log("calling demo function");
// demo();
// console.log("end"); 

// function one(){
//     return 1;
// }
// function two(){
//     return one() + one();
// }
// function three(){
//     let sum =  two() + one();
//     console.log(sum);
// }

// console.log("result is here");
// three();

// setTimeout(() => {
//     console.log("hello");
// }, 2000);

// console.log("welcome");

// setTimeout(() => {
//     console.log("hello again");
// }, 2000);

let h1 = document.querySelector("h1");

function colorChange(color,delay,nextColor){
    setTimeout(() => {
        h1.style.color = color;
        if (nextColor) {
           nextColor(); 
        }
    }, delay);
} 
colorChange("red",2000,()=>{
    colorChange("blue",2000,()=>{
        colorChange("green",2000,()=>{
            colorChange("pink",2000,()=>{
                colorChange("yellow",2000)
            })
        })
    })
})
