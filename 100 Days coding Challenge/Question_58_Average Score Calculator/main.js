// Question : 58
/*Average Score Calculator: Write a simple program that can take
lots of scores and find their average.*/
// Function to calculate the average of an array of scores
function calculateAverage(scores) {
    var total = scores.reduce(function (acc, curr) { return acc + curr; }, 0);
    var average = total / scores.length;
    return average;
}
function main() {
    var scores = [85, 90, 92, 88, 95];
    var averageScore = calculateAverage(scores);
    console.log("\n");
    console.log("Average Score:", averageScore);
}
main();
