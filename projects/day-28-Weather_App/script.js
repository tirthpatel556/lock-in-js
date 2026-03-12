let cityInput=document.getElementById("inputCity");
let searchButton=document.getElementById("searchBtn");
let weatherResult=document.getElementById("weatherResult");

// search-button

searchButton.addEventListener("click",
    function (){
        let cityName=cityInput.value;
        if (cityName==="") {
            weatherResult.innerText="Please enter the city name";
            return;
        }
        weatherResult.innerText="Loading weather data..."
        getWeather(cityName);
    }
);

// api-call

async function getWeather(city) {
    let response= await fetch(`https://wttr.in/${city}?format=j1`);
    let data = await response.json();
    console.log(data);
    displayWeather(data,city);
}

// ui

function displayWeather(data,city) {
    let temperature=data.current_condition[0].temp_C;
    let condition=data.current_condition[0].weatherDesc[0].value;
    weatherResult.innerHTML=
    "City: "+ city +
    "<br>Temperature: "+ temperature +"°C"+
    "<br>Condition: "+ condition;
}
