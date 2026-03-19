let greetingText = document.getElementById("greetingText");
let quoteText = document.getElementById("quote");
let author = document.getElementById("author");
let newQuote = document.getElementById("newQuote");
let inputCity = document.getElementById("inputCity");
let searchButton = document.getElementById("search");
let weatherText = document.getElementById("weatherText");

// greeting section

function greeting() {
  let hour = new Date().getHours();
  if (hour < 12) {
    greetingText.innerText = "Good Morning Tirth";
  } else if (hour < 18) {
    greetingText.innerText = "Good Afternoon Tirth";
  } else {
    greetingText.innerText = "Good Evening Tirth";
  }
}
greeting();

// quote-api fetch

async function generateQuote() {
  quoteText.innerText = "Loading...";
  author.innerText = "";
  let response = await fetch("https://dummyjson.com/quotes/random");
  let data = await response.json();
  displayQuote(data);
}

// qoute display function

function displayQuote(data) {
  quoteText.innerText = `"${data.quote}"`;
  author.innerText = `- ${data.author}`;
}
generateQuote();

//quote search button

newQuote.addEventListener("click", generateQuote);

// weather search button

search.addEventListener("click", function () {
  let cityName = inputCity.value.trim();
  let validCity = /^[a-zA-Z\s]+$/;
  if (!validCity.test(cityName)) {
    weatherText.innerText = "Please enter a valid city name";
    return;
  }
  weatherText.innerText = "Loading weather data...";
  getWeather(cityName);
});

// weather-api call

async function getWeather(city) {
  let response = await fetch(`https://wttr.in/${city}?format=j1`);
  let data = await response.json();
  console.log(data);
          if (!data.current_condition) {
            weatherText.innerText="City not found!";
            return;
        }
  displayWeather(data);
}

// weather text display

function displayWeather(data) {
  let temperature = data.current_condition[0].temp_C;
  let condition = data.current_condition[0].weatherDesc[0].value;
  let realCity = data.nearest_area[0].areaName[0].value;
  let conditionText = condition.toLowerCase();
  let emoji = "☀️";
  if (conditionText.includes("cloud") || condition.includes("Overcast")) {
    emoji = "☁️";
  } else if (conditionText.includes("rain")) {
    emoji = "🌧️";
  } else if (conditionText.includes("snow")) {
    emoji = "❄️";
  }
  weatherText.innerHTML = `
    <h1>${realCity}</h1>
    <h1>${emoji}</h1>
    <p>Temperature:${temperature}</p>
    `;
}
