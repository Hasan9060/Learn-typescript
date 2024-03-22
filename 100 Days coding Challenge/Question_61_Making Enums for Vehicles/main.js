// Question : 61
/*Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles
 using enums, and show one example.*/
var VehicleCategory;
(function (VehicleCategory) {
    VehicleCategory["Car"] = "Car";
    VehicleCategory["Truck"] = "Truck";
    VehicleCategory["Motorcycle"] = "Motorcycle";
})(VehicleCategory || (VehicleCategory = {}));
var Vehicle = /** @class */ (function () {
    function Vehicle(category) {
        this.category = category;
    }
    return Vehicle;
}());
var myCar = new Vehicle(VehicleCategory.Car);
console.log("\n");
console.log("My vehicle is a ".concat(myCar.category));
