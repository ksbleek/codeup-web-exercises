"use strict";

/*======= ALERT =======*/

// alert("HEY, listen!");

/*======= CONFIRM =======*/

// confirm("Wait! Listen!");

 // let userChoice = confirm("Wait! Listen!");
 //
 // if (userChoice === true) {
 //     console.log("Good Job!")
 // }  else {
 //     console.log("You have disappointed me.");
 // }

/*======= Prompt =======*/

let currentSpeed = prompt("How fast are you driving?");
let plannedSpeed = prompt("How fast do you want to drive?");
let distanceLeft = prompt("How many miles do you have left?");

let timeAtCurrentSpeed = (distanceLeft/currentSpeed) * 60;

let timeAtPlannedSpeed = (distanceLeft/plannedSpeed) * 60;

let timeSaved = timeAtCurrentSpeed - timeAtPlannedSpeed;

console.log(`At your current speed you will take ${timeAtCurrentSpeed.toFixed(0)} minutes. At your planned speed you will take ${timeAtPlannedSpeed.toFixed(0)} minutes. You will save ${timeSaved.toFixed(0)} minutes by using planned speed.`);

