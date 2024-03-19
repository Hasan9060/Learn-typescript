"use strict";
// Question : 10
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
Object.defineProperty(exports, "__esModule", { value: true });
// Calculator Program
// This program performs basic arithmetic operations like addition, subtraction, multiplication, and division.
// Function to add two numbers
function add(num1, num2) {
    return num1 + num2;
}
// Function to subtract two numbers
function subtract(num1, num2) {
    return num1 - num2;
}
// Function to multiply two numbers
function multiply(num1, num2) {
    return num1 * num2;
}
// Function to divide two numbers
function divide(num1, num2) {
    if (num2 === 0) {
        throw new Error("Cannot divide by zero");
    }
    return num1 / num2;
}
// Example usage
var num1 = 10;
var num2 = 5;
console.log("Addition: ".concat(add(num1, num2)));
console.log("Subtraction: ".concat(subtract(num1, num2)));
console.log("Multiplication: ".concat(multiply(num1, num2)));
console.log("Division: ".concat(divide(num1, num2)));
