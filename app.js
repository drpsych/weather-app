const apiKey = "ccdab352335aeae1573f9c8564bf4f9f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")
const enterKey = document.querySelector(".search input");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    // Checks if city name is correct
    if(response.status == 404) {
        // hides weather details, shows error message if 404...
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        console.log(data);
    
        // updates details with searched city
        document.querySelector(".city").innerHTML = data.name;
        // document.querySelector(".description").innerHTML = data.weather[0].main;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " MPH";
    
        // changes icon of weather based on name  of description
        if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
            document.querySelector(".description").innerHTML = "Cloudy";
        } else if(data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
            document.querySelector(".description").innerHTML = "Clear";
        } else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
            document.querySelector(".description").innerHTML = "Rainy";
        } else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
            document.querySelector(".description").innerHTML = "Drizzle";
        } else if(data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
            document.querySelector(".description").innerHTML = "Mist";
        } else if(data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png";
            document.querySelector(".description").innerHTML = "Snowing";
        } 
    
        // Shows weather on found city, hides error message
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

// listens for "Enter" key press then runs function
enterKey.addEventListener("keypress", (enter)=> {
    if (enter.key === "Enter") {
        enter.preventDefault();
        document.querySelector(".search button").click();
    }
});

searchButton.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
});
