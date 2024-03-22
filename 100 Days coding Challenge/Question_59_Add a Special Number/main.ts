// Question : 59

/*Add a Special Number: Make a program that creates custom adders.
These adders can add a specific number to any other number you give them later.*/
class Adder {
    private specialNumber: number;

    constructor(specialNumber: number) {
        this.specialNumber = specialNumber;
    }

    add(numberToAdd: number): number {
        return numberToAdd + this.specialNumber;
    }
}
const customAdder = new Adder(5); // Creating a custom adder with special number 5
console.log("\n")
console.log(customAdder.add(10)); // Outputs: 15 (10 + 5)
console.log(customAdder.add(20)); // Outputs: 25 (20 + 5)
console.log(customAdder.add(-3)); // Outputs: 2 (-3 + 5)
let grades: number[] = [85, 90, 75, 88, 92];

let sum: number = grades.reduce((acc, curr) => acc + curr, 0);
let average: number = sum / grades.length;

console.log("\n")
console.log("Average Grade:", average);

 
  










