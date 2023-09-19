"use strict";

// create a circle object
var circle = {
    radius: 3,

    getArea: function () {
        return Math.PI * (this.radius * this.radius)
    },
    logInfo: function (doRounding) {
        // TODO: complete this method.
        let area = this.getArea()
        if(doRounding === true){
            area = Math.round(this.getArea())

        }
        console.log("Area of a circle with radius: " + this.radius + ", is: " + area);
    }
};
// log info about the circle
console.log("Raw circle information");
circle.logInfo(false);
console.log("Circle information rounded to the nearest whole number");
circle.logInfo(true);

console.log("=======================================================");
// TODO: Change the radius of the circle to 5.
circle.radius = 5;
// log info about the circle
console.log("Raw circle information");
circle.logInfo(false);
console.log("Circle information rounded to the nearest whole number");
circle.logInfo(true);
