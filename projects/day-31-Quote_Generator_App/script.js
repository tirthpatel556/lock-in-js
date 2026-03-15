let quoteText=document.getElementById("quote");
let authorText=document.getElementById("author");
let newQuoteBtn=document.getElementById("newQuoteBtn");
let copyBtn=document.getElementById("copyBtn");

newQuoteBtn.addEventListener("click",
    getQuote);

async function getQuote() {
    quoteText.innerText="Genetaring the Quote..."
    authorText.innerText="";
    let response= await fetch("https://dummyjson.com/quotes/random");
    let data= await response.json();
    displayQuote(data);
    console.log(data);
}

function displayQuote(data) {
    quoteText.innerText=data.quote;
    authorText.innerText=data.author;
};

copyBtn.addEventListener("click",
    function () {
        navigator.clipboard.writeText(quoteText.innerText);
        copyBtn.innerText="copied";
    }
)