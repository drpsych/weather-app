const apiKey = "ccdab352335aeae1573f9c8564bf4f9f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " MPH";

    if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
    } else if(data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
    } else if(data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
    } else if(data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    } else if(data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
    } else if(data.weather[0].main == "Snow") {
        weatherIcon.src = "images/snow.png";
    } 

    document.querySelector(".weather").style.display = "block";
}

searchButton.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})

// checkWeather();
