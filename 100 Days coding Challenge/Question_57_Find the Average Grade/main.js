// Question : 55
/*Find the Average Grade: Given a list of grades, calculate the average grade.*/
var grades = [85, 90, 75, 88, 92];
var sum = grades.reduce(function (acc, curr) { return acc + curr; }, 0);
var average = sum / grades.length;
console.log("\n");
console.log("Average Grade:", average);
