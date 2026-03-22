let greetingText = document.getElementById("greetingText");
let quoteText = document.getElementById("quote");
let author = document.getElementById("author");
let newQuote = document.getElementById("newQuote");
let inputCity = document.getElementById("inputCity");
let searchButton = document.getElementById("search");
let weatherText = document.getElementById("weatherText");
let toggleBtn = document.getElementById("themeToggle");

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
  // quoteText.innerText = "Loading...";
  // author.innerText = "";
  let response = await fetch("https://dummyjson.com/quotes/random");
  let data = await response.json();
  displayQuote(data);
}

// qoute display function

function displayQuote(data) {

  quoteText.classList.remove("show");
  void quoteText.offsetWidth;
  quoteText.classList.add("fade");
  setTimeout(() => {
    
    quoteText.innerText = `"${data.quote}"`;
    author.innerText = `- ${data.author}`;
    localStorage.setItem("quote",data.quote);
    localStorage.setItem("author",data.author);

    quoteText.classList.remove("fade");
    quoteText.classList.add("show");

  }, 500);
}

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
  localStorage.setItem("city",cityName);
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
  let emoji = getWeatherEmoji(condition);
  weatherText.innerHTML = `${realCity} ${emoji} ${temperature}°C`;
}

// weather-emoji 

  function getWeatherEmoji(condition) {
     condition = condition.toLowerCase();

    if (condition.includes("cloud") || condition.includes("Overcast")) 
      return "☁️";

     if (condition.includes("rain")) 
      return "🌧️";
    
     if (condition.includes("snow")) 
      return "❄️";
    
    if (condition.includes("sun") || condition.includes("clear")) 
      return "☀️";

    return "🌏";
  }

// save weather

let savedCity=localStorage.getItem("city");
if (savedCity) {
  getWeather(savedCity);
  inputCity.value=savedCity;
}

// save quote

let savedQuote=localStorage.getItem("quote");
let savedAuthor=localStorage.getItem("author");

if (savedQuote && savedAuthor) {

  quoteText.innerText=`"${savedQuote}"`;
  author.innerText=`- ${savedAuthor}`;
} else {
  generateQuote();
}

// save theme

let savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.body.classList.add("light-mode");
  toggleBtn.checked = true;
} 
  
// theme toggle

toggleBtn.addEventListener("change",
  function(){
    if (toggleBtn.checked) {
      document.body.classList.add("light-mode");
      localStorage.setItem("theme","light");
    } else {
      document.body.classList.remove("light-mode");
      localStorage.setItem("theme","dark");
    }
  }
);