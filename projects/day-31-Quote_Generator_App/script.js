let quoteText=document.getElementById("quote");
let authorText=document.getElementById("author");
let newQuoteBtn=document.getElementById("newQuoteBtn");
let copyBtn=document.getElementById("copyBtn");
let quoteBox=document.getElementById("quoteBox");

newQuoteBtn.addEventListener("click",
    getQuote);

document.addEventListener("keydown",
    function(event){
        if (event.key==="Enter") {
            getQuote();
        }
    }
);

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

function displayQuote(data) {
    quoteText.innerText=data.quote;
    authorText.innerText=data.author;
};
getQuote();

copyBtn.addEventListener("click",
    function () {
        navigator.clipboard.writeText(quoteText.innerText);
        copyBtn.innerText="copied";
    }
)