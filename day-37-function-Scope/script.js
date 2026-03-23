                            //  scope  // 

// let a = 10;
// function test(){

//     console.log(a);
// }
// test();     //here code runs because a is global. global = accessible everywhere

// function test(){
//     let a = 10;
// }
// console.log(a);   //here code gets error because a is inside function and not global. 

// if (true) {
//     let x=5;
// }
// console.log(x);   //here we got error cause x is not defined. same here as well x is not global. 

// if (true) {
//     var x = 5;
// }
// console.log(x);   //here we got output cause "var" ignores block scope.


                               // closures //

// function outer() {
//     let count = 0;
//     function inner() {
//         count++;
//         console.log(count);
//     }
//     return inner
// }
// let counter = outer();     //closure = function keeps its parent variable alive.
// counter();
// counter();
// counter();

// function createUser(name){
    // return function(){
        // console.log("hello "+name);
    // }
// }
// let user1 = createUser("tirth");  //createUser("tirth") -->creates a box.
                                  //inside the box --> name = "tirth";
// let user2 = createUser("skirk");  //createUser("skirk") --> creates another box same as upper one.
                                  //inside box --> name = "skirk";
// user1();
// user2();

// scope = where variable lives
// closure = function remebers that variable 

