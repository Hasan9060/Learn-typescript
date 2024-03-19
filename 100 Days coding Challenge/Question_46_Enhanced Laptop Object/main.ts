// Question : 46

/*Enhanced Laptop Object: Construct an object for a laptop including properties make, 
model, year, and a method describe() that logs a sentence about the laptop.*/

class Laptop {
    constructor(public make: string, public model: string, public year: number) {}

    describe(): void {
        console.log(`This ${this.make} ${this.model} laptop was released in ${this.year}.`);
    }
}

const myLaptop = new Laptop("HP", "17-cn4010nr", 2023);
console.log("\n")
myLaptop.describe(); // Logs: "This HP 17-cn4010nr laptop was released in 2023."




