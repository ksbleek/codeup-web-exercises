"use strict"

const two = 2000;
const four = 4000;
const six = 6000;

let profilePic = document.querySelector("#profile-pic")
const profilePicChange = setTimeout(() => profilePic.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/b/bc/Bonnet.gif"), two);

let userName = document.querySelector("#profile-name")
const changeName = setTimeout(() => userName.innerHTML = "Stede Bonnet", four);

let profDescription = document.querySelector("#profile-desc");
const changeDescriptionColor = setTimeout(() => profDescription.style.color = "blue", six);
const changeDescriptionFont = setTimeout(() => profDescription.style.fontFamily = "Trattatello, fantasy", six);

let colorToggle = document.querySelector("#profile-card");
const timedColorToggle = setInterval(() => colorToggle.classList.toggle("profile-card"), 2000);