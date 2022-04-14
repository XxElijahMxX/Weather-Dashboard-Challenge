// setting up constant variables to insert each parameter to display on the page
const cityIn = document.querySelector("#search-city");
const searchBtn = document.querySelector("#search-button");
const clearBtn = document.querySelector("#clear-history");
const icon = document.querySelector("#weather-icon");
const temp = document.querySelector("#temp");
const name = document.querySelector("#city");
const wind = document.querySelector("#wind");
const humid = document.querySelector("#humid");
const uvDex = document.querySelector("#UV");
let dailyWeather = document.querySelector("#current-weather");

// defining my api key and my url link for the api
const api = {
    key: "e9cf543687d2da78e122a0814bead918",
    link: "api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}",
}
