// Variables

let PersonName :string = "Syed Hasan Rafay"
console.log(PersonName);

// Numbers

let age :number = 17;
let height: number = 5.8;
let weight: number = 55
console.log (`Age is ${age}, Height is ${height} and Weight is ${weight}`);

// Addition
let num1 = 45;
let num2 = 78;
console.log(num1 + num2);

// Subtraction
let  num3 = 98;
let num4 = 32;
console.log(num3 - num4);

// Divivsion
let  num5 =  16;
let num6 = 2;
console.log(num5 /  num6);

// Multiplication
let num7 = 45;
let num8 = 23;
console.log(num7 / num8);

// Modules

let num9 = 36
let num10 = 78
export function modulus(num9: number, num10: number): number {
    return num9 % num10;
  }


// Exponent

let exponentValue: number = 8;

function exponent(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}

console.log(exponent(2, exponentValue)); // Output: 4
