"use strict"

const SALat = 29.426825118534886;
const SALong = 98.48948239256946;

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
    console.log('Lng:', coordinates.lng, 'Lat:', coordinates.lat);
    marker.setLngLat(coordinates).addTo(map);
    fetchCurrentWeather(coordinates.lat, coordinates.lng);
}
map.on('click', add_marker);

fetch(`https://api.openweathermap.org/data/2.5/weather?` +
    `lat=29.426825118534886&lon=-98.48948239256946` + `&appid=${OPEN_WEATHER_API_KEY}` +
    `&units=imperial`)
    .then( data => data.json())
    .then( currentWeather => console.log(currentWeather))
    .then(data => updateCurrentWeather(data));
fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
    `lat=29.426825118534886&lon=-98.48948239256946` +
    `&appid=${OPEN_WEATHER_API_KEY}` +
    `&units=imperial`)
    .then( data => data.json())
    .then( currentWeather => console.log(currentWeather));



function fetchCurrentWeather(lat = SALat, long = SALong){
    fetch(`https://api.openweathermap.org/data/2.5/weather?` +
        `lat=${lat}&lon=${long}` + `&appid=${OPEN_WEATHER_API_KEY}` +
        `&units=imperial`)
        .then( data => data.json())
        .then(data => updateCurrentWeather(data));
}
function updateCurrentWeather(data){
    let date = dateFromTimeStamp(data.dt)
    cardOneHeader.innerHTML = `<h4>${date}</h4>`
    let min = data.main.temp_min
    let max = data.main.temp_max
    let icon = data.weather[0].icon
    cardOneTemp.innerHTML = `<p>${min}°F/${max}°F</p><img src="http://openweathermap.org/img/w/${icon}.png">`
}
function fetchWeatherForcast(){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
        `lat=29.426825118534886&lon=-98.48948239256946` +
        `&appid=${OPEN_WEATHER_API_KEY}` +
        `&units=imperial`)
        .then( data => data.json())
        .then( currentWeather => console.log(currentWeather));
}

let cardOneHeader = document.querySelector("#card1-header")
let cardOneTemp = document.querySelector("#cardOneTemp")