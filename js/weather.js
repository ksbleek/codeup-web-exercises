"use strict"




const SALat = 29.426825118534886;
const SALong = -98.48948239256946;

fetchCurrentWeather();
fetchWeatherForecast();

    mapboxgl.accessToken = MAPBOX_API_KEY;
//     const map = new mapboxgl.Map({
//     container: 'map', // container ID
//     style: 'mapbox://styles/mapbox/streets-v11', // style URL
//     zoom: 10, // starting zoom
//     center: [-98.4916, 29.4252] // [lng, lat]
// });

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.48948239256946, 29.426825118534886],
    zoom: 13
});

let marker = new mapboxgl.Marker();

function add_marker (event) {
    let coordinates = event.lngLat;
    marker.setLngLat(coordinates).addTo(map);

    fetchCurrentWeather(coordinates.lat, coordinates.lng)
    fetchWeatherForecast(coordinates.lat, coordinates.lng);
}
map.on('click', add_marker);

function createForcastWeatherObject(data){
    return {
        date: dateFromTimeStamp(data.dt),
        name: data.name,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        windDeg: data.wind.deg,
        windSpeed: data.wind.speed,
        minTemp: data.main.temp_min,
        maxTemp: data.main.temp_max,
        temp: data.main.temp,
        humidity: data.main.humidity
    }
}

function currentWeatherCard(currentWeatherObject){
    cardOneHeader.innerHTML = `<div id="weatherBar"><h2 id="currentTemp">${currentWeatherObject.temp}°F</h2><img src="http://openweathermap.org/img/w/${currentWeatherObject.icon}.png"><p id="subweatherCurrent">${currentWeatherObject.minTemp}°F/ ${currentWeatherObject.maxTemp}°F<br>${currentWeatherObject.description}</p></div><h3>${currentWeatherObject.date}</h3>`
    currentCity.innerHTML = `${currentWeatherObject.name}`
}

function fetchCurrentWeather(lat = SALat, long = SALong){
    fetch(`https://api.openweathermap.org/data/2.5/weather?` +
        `lat=${lat}&lon=${long}` + `&appid=${OPEN_WEATHER_API_KEY}` +
        `&units=imperial`)
        .then( data => data.json())
        .then(data => {
            let currentWeather = {
                date: dateFromTimeStamp(data.dt),
                    name: data.name,
                description: data.weather[0].description,
                icon: data.weather[0].icon,
                windDeg: data.wind.deg,
                windSpeed: data.wind.speed,
                minTemp: data.main.temp_min,
                maxTemp: data.main.temp_max,
                temp: Math.trunc(data.main.temp),
                humidity: data.main.humidity
            }
            currentWeatherCard(currentWeather)

        });
}

function generateForcastCards(arr){
    arr.forEach((forcast) => {
        let card = document.createElement("div");
        let cardHeader = document.createElement("div");
        cardHeader.innerHTML = `<h4>${forcast.date}</h4>`
        card.appendChild(cardHeader);
        let weatherData = document.createElement("ul");
        weatherData.innerHTML = `<li>${forcast.minTemp}°F/ ${forcast.maxTemp}°F<br><img src="http://openweathermap.org/img/w/${forcast.icon}.png"></li><li>${forcast.description}</li><li>${forcast.humidity}</li><li>${forcast.windSpeed}</li>`
        card.appendChild(weatherData)
        cardContainer.appendChild(card)
    })
}

function fetchWeatherForecast(lat = SALat, long = SALong){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
        `lat=${lat}&lon=${long}` +
        `&appid=${OPEN_WEATHER_API_KEY}` +
        `&units=imperial`)
        .then( data => data.json())
        .then(weatherForecast => {
            console.log(weatherForecast.list);
            getForcastArray(weatherForecast)
            generateForcastCards(getForcastArray(weatherForecast))
        });
}

function getForcastArray(weatherForecast){
    let forcastArray = []
    weatherForecast.list.forEach((forecast, index) => {
        if (index % 8 === 0 && index !== 0){
            forcastArray.push(createForcastWeatherObject(forecast))
        }
    })
    return forcastArray
}

let currentCity = document.querySelector("#selectedCity")
let cardOneHeader = document.querySelector("#currentWeather")
let cardContainer = document.querySelector("#card-container")
let formContent = document.querySelector("#searchForm")
let searchBtn = document.querySelector("#searchBtn")

formContent.addEventListener("submit", (e) =>{
    e.preventDefault()
    const something = formContent.value
    geocode(something).then( coords =>
        console.log(coords))
            fetchCurrentWeather(lat, lng)
            fetchWeatherForecast(lat, lng);


})
function geocode(search) {
    let baseUrl = 'https://api.mapbox.com';
    let endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(`${baseUrl}${endPoint}${encodeURIComponent(search)}.json?access_token=${MAPBOX_API_KEY}`)
        .then( res => res.json() )
        .then( data => data.features[0].center)
}

// event => {
//  event.preventDefault()
//  const something = input.value
// geocode(something).then( coords =>    let lat = coords[1]
//             let lng = coords[0]
//             fetchCurrentWeather(lat, lng)
//             fetchWeatherForecast(lat, lng);
//)
//
// }