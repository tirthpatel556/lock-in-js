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
        weatherResult.innerText="Loading weather data..."
        getWeather(cityName);
    }
);

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
        weatherResult.innerHTML="Failed to tetch weather.";
    }
}

// ui

function displayWeather(data) {
    let temperature=data.current_condition[0].temp_C;
    let condition=data.current_condition[0].weatherDesc[0].value;
    let realCity=data.nearest_area[0].areaName[0].value;
    weatherResult.innerHTML=
    "<h3>City: "+ realCity+ "</h3>" +
    "<br><p>Temperature: "+ temperature +"°C</p>"+
    "<br><p>Condition: "+ condition+"</p>";
}
