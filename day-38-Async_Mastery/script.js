// when we call api -->api takes time -->js dont wait -->runs next line.
// so we use promises and async function to prevent that.

                     // 1. Promise function //
    
   //  we dont use promise usually. problem-->  too many .then which make code messy and less readable.(callback hell)

// let promise= fetch("https://dummyjson.com/quotes/random"); 
// promise.then(function(response){
//     return response.json()
// }).then(function(data){
//     console.log(data);
// });

                     // async function works same as promise but lot easy and readable.

// async function generateQuote() {
//     let response = await fetch("https://dummyjson.com/quotes/random");   //await= wait here until result come;
//     let data = await response.json();
//     console.log(data);
// }
// generateQuote();


            //    Error- Handling  //

//if api fails then app crashes. so that's why we use error-handling.
// we use try and catch method

// async function generateQuote() {
//     try {
//         let response = await fetch("https://dummyjson.com/quotes/random");   //if await fails next line wont be executed unless it is in try-catch  
//         let data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("failed to load quote!",error);
//     }
// }
// generateQuote();