// Question : 62
/*Making a Student Template: Create a blueprint for student information, including
their name, age, and the classes they're taking, and then fill in this blueprint with
an example student.*/
var Student = /** @class */ (function () {
    function Student(name, age, classes) {
        this.name = name;
        this.age = age;
        this.classes = classes;
    }
    return Student;
}());
var exampleStudent = new Student("HASAN RAFAY", 17, ["Biology", "English", "Chemistry"]);
console.log("\n");
console.log("Name: ".concat(exampleStudent.name));
console.log("Age: ".concat(exampleStudent.age));
console.log("Classes:");
exampleStudent.classes.forEach(function (className, index) {
    console.log("".concat(index + 1, ". ").concat(className));
});
