// Question : 45

// Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword 
// arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.

// Car type
type Car = {
    manufacturer: string;
    model: string;
    color?: string; // Optional property
    features?: string[]; // Optional array of features
};

// create a car object
function createCar(manufacturer: string, model: string, color?: string, features?: string[]): Car {
    const car: Car = {
        manufacturer,
        model,
        color,
        features,
    };
    return car;
}

const myCar = createCar('Suzuki', 'Cultus VXR', 'Blue', ['GPS', 'Sunroof' , 'Sound System' , "automatic window"]);
console.log("\n")
console.log('Car information:');
console.log(myCar);
