let cityInput=document.getElementById("inputCity");
let searchButton=document.getElementById("searchBtn");
let weatherResult=document.getElementById("weatherResult");

// search-button

searchButton.addEventListener("click",
    function (){
        let cityName=cityInput.value.trim();
        let validCity=/^[a-zA-Z\s]+$/;
        if (!validCity.test(cityName)) {
            weatherResult.innerText="Please enter a valid city name";
            return;
        }
        weatherResult.innerText="Loading weather data...";
        getWeather(cityName);
    }
);
cityInput.addEventListener("keydown",
    function(event){
        if (event.key==="Enter") {
            let cityName=cityInput.value.trim();
            let validCity=/^[a-zA-Z\s]+$/;
            if (!validCity.test(cityName)) {
                weatherResult.innerText="Please enter a valid city name";
                return;
            }
            weatherResult.innerText="Loading weather data...";
            getWeather(cityName);
        }
    }
)

// api-call

async function getWeather(city) {
    try {    
        let response= await fetch(`https://wttr.in/${city}?format=j1`);
        let data = await response.json();
        if (!data.current_condition) {
            weatherResult.innerText="City not found!";
            return;
        }
        displayWeather(data);
    } catch (error) {
        weatherResult.innerHTML="Failed to fetch weather.";
    }
}

// ui

function displayWeather(data) {
    let temperature=data.current_condition[0].temp_C;
    let condition=data.current_condition[0].weatherDesc[0].value;
    let realCity=data.nearest_area[0].areaName[0].value;
    let humidity=data.current_condition[0].humidity;
    let feelslike=data.current_condition[0].FeelsLikeC;
    let time=data.current_condition[0].localObsDateTime;
    let hour=new Date(time).getHours();
    let conditionText= condition.toLowerCase();
    let emoji="☀️";
    if (conditionText.includes("cloud")|| condition.includes("Overcast")) {
        emoji="☁️";
    } else if (conditionText.includes("rain")) {
        emoji="🌧️";
    }else if (conditionText.includes("snow")) {
        emoji="❄️";
    };
    let dayTime;
    if (hour >=6 && hour < 18) {
        dayTime="☀️ Day"
    } else {
        dayTime="🌙 Night"
    }
    weatherResult.innerHTML=`
    <h1>${realCity}</h1>
    <h2>${dayTime}</h2>
    <h1>${emoji}</h1>
    <p>Temperature:${temperature}</p>
    <p>Condition:${condition}</p>
    <p>Humidity:${humidity}%</p>
    <p>Feels Like:${feelslike}°C</p>
    `;
}
