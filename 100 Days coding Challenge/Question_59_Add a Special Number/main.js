// Question : 59
/*Add a Special Number: Make a program that creates custom adders.
These adders can add a specific number to any other number you give them later.*/
var Adder = /** @class */ (function () {
    function Adder(specialNumber) {
        this.specialNumber = specialNumber;
    }
    Adder.prototype.add = function (numberToAdd) {
        return numberToAdd + this.specialNumber;
    };
    return Adder;
}());
var customAdder = new Adder(5); // Creating a custom adder with special number 5
console.log("\n");
console.log(customAdder.add(10)); // Outputs: 15 (10 + 5)
console.log(customAdder.add(20)); // Outputs: 25 (20 + 5)
console.log(customAdder.add(-3)); // Outputs: 2 (-3 + 5)
var grades = [85, 90, 75, 88, 92];
var sum = grades.reduce(function (acc, curr) { return acc + curr; }, 0);
var average = sum / grades.length;
console.log("\n");
console.log("Average Grade:", average);
