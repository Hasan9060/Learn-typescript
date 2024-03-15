// Question : 45
// create a car object
function createCar(manufacturer, model, color, features) {
    var car = {
        manufacturer: manufacturer,
        model: model,
        color: color,
        features: features,
    };
    return car;
}
var myCar = createCar('Suzuki', 'Cultus VXR', 'Blue', ['GPS', 'Sunroof', 'Sound System', "automatic window"]);
console.log("\n");
console.log('Car information:');
console.log(myCar);
