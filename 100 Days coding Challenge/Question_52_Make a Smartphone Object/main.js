// Question : 52
/*Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model,
 and other key features like how much storage it has, the size of its screen, and how long its battery lasts.*/
// make object track of smartphones
var Smartphone = {
    brand: "Samsung",
    model: "samsung J5",
    Storage: 128,
    screenSizeInches: 6.2,
    batteryLifeHours: 24,
};
console.log("\n");
console.log("Brand: ".concat(Smartphone.brand));
console.log("Model: ".concat(Smartphone.model));
console.log("Storage: ".concat(Smartphone.Storage, " GB"));
console.log("Screen Size: ".concat(Smartphone.screenSizeInches, " inches"));
console.log("Battery Life: ".concat(Smartphone.batteryLifeHours, " hours"));
