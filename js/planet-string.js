"use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

/**
 * TODO:
 * Convert planetsString to an array, and save it in a variable named
 * planetsArray.
 * console.log planetsArray to check your work
 */
let planetsArray = planetsString.split("|")
console.log(planetsArray);

/**
 * TODO:
 * Create a string with <br> tags between each planet. console.log() your
 * results. Why might this be useful?
 *
 * BONUS:
 * Create another string that would display your planets in an undordered
 * list. You will need an opening AND closing <ul> tags around the entire
 * string, and <li> tags around each planet.
 */

let planetsBr = planetsArray.join("<br>");
console.log(planetsBr)
/* This could be used to list out planets vertically in html. */

let planetUl = `<ul><li>${planetsArray.join("<li>")}</ul>`
console.log(planetUl)