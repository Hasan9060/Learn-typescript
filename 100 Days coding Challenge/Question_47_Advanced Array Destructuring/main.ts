// Question : 47

/*Advanced Array Destructuring: Given an array of objects representing different laptops, 
each with properties make, model, and year, use array destructuring to assign the first and 
second laptops to variables. Then, log these variables.*/

// array of laptop objects
const laptops = [
    { make: "Dell", model: "XPS 13", year: 2022 },
    { make: "HP", model: "Spectre x360", year: 2023 },
    { make: "Lenovo", model: "ThinkPad ", year: 2021 }
];

// Destructure the laptops
const [firstLaptop, secondLaptop, thirdLaptop] = laptops;

// Log the extracted laptops
console.log("\n")
console.log("First Laptop:", firstLaptop);
console.log("Second Laptop:", secondLaptop);
console.log("Third Laptop:", thirdLaptop);






