console.log("Hello from external JavaScript");

/*===== Alert =====*/

alert("Welcome to my Website!");

/*===== Favorite Color =====*/

let favoriteColor = prompt("What is your favorite color?");

alert(`Great, ${favoriteColor} is my favorite color as well!`);

/*===== Movie Rental =====*/

let littleMermaid = prompt("How many days did you rent the Little Mermaid for?");
let brotherBear = prompt("how many days did you rent Brother Bear for?");
let hercules = prompt("how many days did you rent Hercules for?")

let pricePerDay = 3;

let totalDays = parseInt(littleMermaid) + parseInt(brotherBear) + parseInt(hercules)

let moneyOwed = totalDays * pricePerDay;

alert(`You will owe $${moneyOwed} for the movie rentals.`)

/*===== Contract Work =====*/

let googlePay = prompt("How much is Google paying per hour?");
let googleHours = prompt("how many hours did you work for Google?");

let amazonPay = prompt("How much is Amazon paying per hour?");
let amazonHours = prompt("how many hours did you work for Amazon?");

let facebookPay = prompt("How much is Facebook paying per hour?");
let facebookHours = prompt("how many hours did you work for Facebook?");

let totalPay = (googlePay * googleHours) + (amazonPay * amazonHours) + (facebookHours * facebookPay);

alert(`Your total pay will be $${totalPay} for the hours worked.`);

/*===== Student Enroll =====*/

let classSpace = confirm("Does the class have room for their enrollment?");

let classConflict = confirm("Does this class conflict with their current schedule?");

if (classConflict === true && classSpace === true) {
    alert("They may enroll in the course.");
} else {
    alert("They may not enroll in course.");
}

/*===== Product Offer =====*/

let premiumMember = confirm("Are you a Premium member?");
let twoOrMore = confirm("Have you purchased more than 2 items?");
let offerExpired = confirm("Is the offer still valid?");

if (premiumMember && offerExpired === true || twoOrMore && offerExpired) {
    alert("You may purchase the item.");
}   else {
    alert("You may not purchase the item.")
}

/* ===== Boolean Solution to Student Enrollment=====*/

let classIsFull = confirm("Is the class full?");
let scheduleConflicts = confirm("Does the class conflict with schedule?");

let studentCanEnroll = !classIsFull && !scheduleConflicts;

alert(`It is ${studentCanEnroll} that you can enroll in this class?`)

/*===== Boolean Solution for Product Offer =====*/

let peronBoughtMoreThanTwoItems = confirm("Did the person buy more than two item");
let offerHasExpired = confirm("Is the offer still valid?");
let premiumMember = confirm("Is the person a premium member?");

let productOfferCanBeApplied = (peronBoughtMoreThanTwoItems || premiumMember) && offerHasExpired;

alert(`It is ${productOfferCanBeApplied} that the pruduct can be purchased.`)