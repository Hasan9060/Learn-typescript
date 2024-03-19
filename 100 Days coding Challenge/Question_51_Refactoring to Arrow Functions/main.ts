// Question : 51

/*Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle 
and refactor it into an arrow function.*/

export{}
// Original function to calculate rectangle area
function calculateRectangleArea(length: number, width: number): number {
    return length * width;
}

// Refactored arrow function
const calculateRectangleAreaArrow = (length: number, width: number): number => length * width;

const length = 5;
const width = 3;
const area = calculateRectangleAreaArrow(length, width);
console.log("\n")
console.log(`The area of the rectangle is ${area} square units.`);




