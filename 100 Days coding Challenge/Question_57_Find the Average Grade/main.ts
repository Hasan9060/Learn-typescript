// Question : 57

/*Find the Average Grade: Given a list of grades, calculate the average grade.*/

let grades: number[] = [85, 90, 75, 88, 92];

let sum: number = grades.reduce((acc, curr) => acc + curr, 0);
let average: number = sum / grades.length;

console.log("\n")
console.log("Average Grade:", average);

 
  










