// Question : 47
/*Advanced Array Destructuring: Given an array of objects representing different laptops,
each with properties make, model, and year, use array destructuring to assign the first and
second laptops to variables. Then, log these variables.*/
// Sample array of laptop objects
var laptops = [
    { make: "Dell", model: "XPS 13", year: 2022 },
    { make: "HP", model: "Spectre x360", year: 2023 },
    { make: "Lenovo", model: "ThinkPad ", year: 2021 }
];
// Destructure the laptops
var firstLaptop = laptops[0], secondLaptop = laptops[1], thirdLaptop = laptops[2];
// Log the extracted laptops
console.log("\n");
console.log("First Laptop:", firstLaptop);
console.log("Second Laptop:", secondLaptop);
console.log("Third Laptop:", thirdLaptop);
