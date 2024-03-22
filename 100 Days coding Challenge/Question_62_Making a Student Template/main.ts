// Question : 62

/*Making a Student Template: Create a blueprint for student information, including 
their name, age, and the classes they're taking, and then fill in this blueprint with
an example student.*/

class Student {
    constructor(public name: string, public age: number, public classes: string[]) {}
}

const exampleStudent = new Student("HASAN RAFAY", 17, ["Biology", "English", "Chemistry"]);

console.log("\n")
console.log(`Name: ${exampleStudent.name}`);
console.log(`Age: ${exampleStudent.age}`);
console.log("Classes:");
exampleStudent.classes.forEach((className, index) => {
    console.log(`${index + 1}. ${className}`);
});



 
  










