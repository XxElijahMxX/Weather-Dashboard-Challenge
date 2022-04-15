// variables for current day search
const cityText = document.getElementById("#city-input");
const SearchBar = document.getElementById("#search");
const cityName = document.getElementById("#city");
const temp = document.getElementById("#temperature");
const wind = document.getElementById("#wind-speed");
const humid = document.getElementById("#humidity");
const UV = document.getElementById("#index");
const icons = document.getElementById("#icons");
let = todaysWeather = document.getElementById("#todaysWeather");


// defining api key and url
const api = {
    Key: "e9cf543687d2da78e122a0814bead918",
    Link: "https://api.openweathermap.org/data/2.5/"
}

// setting up search button
const input = document.querySelector(".input");
const button = document.querySelector(".btn");
btn.addEventListener("click", readInput);

function readInput(click) {
    if (click.type == "click") {
        getWeather(search.value);
        console.log(search.value);
    }
}
// requesting weather data from a fetch using certain parameters
function getWeather() {
}