import * as randomNum from "./number-utils.js";
import * as greetings from "./greeting-logic.js";

let formSelect = document.querySelector("#nameForm");
let name = document.querySelector("#name");
let output = document.querySelector("#outputGreeting")

formSelect.addEventListener("submit", (event) => {
    event.preventDefault()
    let userName = name.value;
    let num = randomNum.randomNumber(0, greetings.greetings.length)
    let selectedGreeting = greetings.greetings[num]
    output.innerHTML = `<h2>${selectedGreeting}, ${userName}</h2>`
});

let num = randomNum.randomNumber(0, greetings.greetings.length)