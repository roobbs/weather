async function getWeather(location) {
    let response = await fetch('https://api.weatherapi.com/v1/current.json?key=fdd09a79a4d5440a8ad165337231011&q=' + location, { mode: 'cors' })
    console.log(response);
    let weather = await response.json();
    console.log(weather);
    return weather;
}
getWeather("dolores hidalgo");