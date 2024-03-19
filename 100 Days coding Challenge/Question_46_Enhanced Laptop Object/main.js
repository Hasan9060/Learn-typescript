// Question : 46
/*Enhanced Laptop Object: Construct an object for a laptop including properties make,
model, year, and a method describe() that logs a sentence about the laptop.*/
var Laptop = /** @class */ (function () {
    function Laptop(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Laptop.prototype.describe = function () {
        console.log("This ".concat(this.make, " ").concat(this.model, " laptop was released in ").concat(this.year, "."));
    };
    return Laptop;
}());
var myLaptop = new Laptop("HP", "17-cn4010nr", 2023);
console.log("\n");
myLaptop.describe(); // Logs: "This HP 17-cn4010nr laptop was released in 2023."
