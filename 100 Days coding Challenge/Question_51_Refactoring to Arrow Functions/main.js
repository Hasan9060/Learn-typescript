"use strict";
// Question : 51
Object.defineProperty(exports, "__esModule", { value: true });
// Original function to calculate rectangle area
function calculateRectangleArea(length, width) {
    return length * width;
}
// Refactored arrow function
var calculateRectangleAreaArrow = function (length, width) { return length * width; };
var length = 5;
var width = 3;
var area = calculateRectangleAreaArrow(length, width);
console.log("\n");
console.log("The area of the rectangle is ".concat(area, " square units."));
