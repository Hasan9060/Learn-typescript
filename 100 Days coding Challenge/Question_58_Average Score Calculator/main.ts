// Question : 58

/*Average Score Calculator: Write a simple program that can take lots of scores and find their average.*/

// Function to calculate the average of an array of scores

function calculateAverage(scores: number[]): number {
    let total = scores.reduce((acc, curr) => acc + curr, 0);
    let average = total / scores.length;
    return average;
}
function main() {
    let scores: number[] = [85, 90, 92, 88, 95];
    let averageScore = calculateAverage(scores);
    console.log("\n")
    console.log("Average Score:", averageScore);
}
main();


 
  










