const apiKey = "ccdab352335aeae1573f9c8564bf4f9f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=Marietta";

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
}

checkWeather();
