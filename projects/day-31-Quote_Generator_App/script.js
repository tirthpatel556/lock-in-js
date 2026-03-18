let quoteText=document.getElementById("quote");
let authorText=document.getElementById("author");
let newQuoteBtn=document.getElementById("newQuoteBtn");
let copyBtn=document.getElementById("copyBtn");
// let tweetBtn=document.getElementById("tweetBtn");
let quoteBox=document.getElementById("quoteBox");

// new quote butoon

newQuoteBtn.addEventListener("click",
    getQuote);

    document.addEventListener("keydown",
        function(event){
            if (event.key==="Enter") {
                getQuote();
            }
        }
    );
    
// copy button
        
    copyBtn.addEventListener("click",
        function () {

                navigator.clipboard.writeText(quoteText.innerText);
                copyBtn.innerText="copied";
        }
    );
        
// quote api

async function getQuote() {

    quoteText.innerText="Genetaring the Quote..."
    authorText.innerText="";
    quoteBox.style.opacity="0";

    setTimeout(async function getQuote() {

        let response= await fetch("https://dummyjson.com/quotes/random");
        let data= await response.json();
        displayQuote(data);
        quoteBox.style.opacity="2";
    }, 500);
    // console.log(data);
}

// quote display function

function displayQuote(data) {
    quoteText.innerText=`"${data.quote}"`;
    authorText.innerText=`-${data.author}`;
};
getQuote();

// tweet button

    // tweetBtn.addEventListener("click",
    //     function(){
    //     let quote=quoteText.innerText;
    //     let author=authorText.innerText;
    //     let twitterUrl=`https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    //     window.open=(twitterUrl,"_Blank");
    //     }
    // );