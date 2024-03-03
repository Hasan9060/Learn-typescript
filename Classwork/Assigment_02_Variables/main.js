"use strict";
// Variables
Object.defineProperty(exports, "__esModule", { value: true });
exports.modulus = void 0;
var PersonName = "Syed Hasan Rafay";
console.log(PersonName);
// Numbers
var age = 17;
var height = 5.8;
var weight = 55;
console.log("Age is ".concat(age, ", Height is ").concat(height, " and Weight is ").concat(weight));
// Addition
var num1 = 45;
var num2 = 78;
console.log(num1 + num2);
// Subtraction
var num3 = 98;
var num4 = 32;
console.log(num3 - num4);
// Divivsion
var num5 = 16;
var num6 = 2;
console.log(num5 / num6);
// Multiplication
var num7 = 45;
var num8 = 23;
console.log(num7 / num8);
// Modules
var num9 = 36;
var num10 = 78;
function modulus(num9, num10) {
    return num9 % num10;
}
exports.modulus = modulus;
// Exponent
var exponentValue = 8;
function exponent(base, exponent) {
    return Math.pow(base, exponent);
}
console.log(exponent(2, exponentValue)); // Output: 4
