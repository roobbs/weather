function displayWeather(obj) {
    const location = document.querySelector(".location");
    const hour = document.querySelector(".hour");
    const img = document.querySelector(".tempImg");
    const condition = document.querySelector(".condition");
    const temp = document.querySelector(".temp");
    const feel = document.querySelector(".feel");
    const humidity = document.querySelector(".humidity");
    const cloud = document.querySelector(".cloud");
    const rain = document.querySelector(".rain");
    const wind = document.querySelector(".wind");
    const uv = document.querySelector(".uv");
    location.textContent = obj.location.name;
    hour.textContent = "Last Updated: " + obj.location.localtime;
    img.src = obj.current.condition.icon;
    condition.textContent = obj.current.condition.text;
    temp.textContent = obj.current.temp_c + " C°";
    feel.textContent = obj.current.feelslike_c + " C°";
    humidity.textContent = obj.current.humidity + "%";
    cloud.textContent = obj.current.cloud + "%";
    rain.textContent = obj.current.precip_mm + "%";
    wind.textContent = obj.current.wind_kph + " Km/h";
    uv.textContent = obj.current.uv;
}
async function getWeather(location) {
    try {
        let getForecast = await fetch('https://api.weatherapi.com/v1/forecast.json?key=fdd09a79a4d5440a8ad165337231011&q=' + location, { mode: 'cors' });
        let forecast = await getForecast.json();
        console.log(forecast)
        displayWeather(forecast);
    } catch (error) {
        console.log('Something happen ' + error)
    }
}
let form = document.querySelector(".input-form").addEventListener("submit", (event) => {
    event.preventDefault();
    let input = document.querySelector("#city-input");
    getWeather(input.value);
    input.value = "";
})
getWeather("dolores hidalgo");