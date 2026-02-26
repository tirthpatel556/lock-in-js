// function first() {
//     secound();
//     console.log("First"); 
// }
// function secound() {
//     console.log("secound");
// }
// first();

// function longTask() {
//     let start=Date.now();
//     while (Date.now()-start<3000) {}
// }
// console.log("start");
// longTask();
// console.log("end");

console.log("Start");
setTimeout(function(){
    console.log("Async Task");
},2000);
console.log("End");

function test() {
    console.log("Inside");
}
console.log("Start");
setTimeout(test,0);
console.log("End");