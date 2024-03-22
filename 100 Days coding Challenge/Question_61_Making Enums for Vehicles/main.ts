// Question : 61

/*Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles
 using enums, and show one example.*/
 
 enum VehicleCategory {
    Car = "Car",
    Truck = "Truck",
    Motorcycle = "Motorcycle"
}
class Vehicle {
    constructor(public category: VehicleCategory) {}
}

const myCar = new Vehicle(VehicleCategory.Car);
console.log("\n")
console.log(`My vehicle is a ${myCar.category}`);



 
  










