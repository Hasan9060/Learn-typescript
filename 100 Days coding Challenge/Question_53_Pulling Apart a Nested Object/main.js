// Question : 53
/*Pulling Apart a Nested Object: Imagine you have a list inside another list that
shows what a computer programmer knows, like coding languages, tools,
and software frameworks. Find a way to get three specific skills from this list
and show them.*/
var skillsList = [
    ["TypeScript", "Java", "C++"],
    ["Git", "Vs code", "Jenkins"],
    ["TensorFlow", "PyTorch", "Scikit-learn"]
];
// Extracting three specific skills
var _a = [skillsList[0][0], skillsList[1][1], skillsList[2][2]], skill1 = _a[0], skill2 = _a[1], skill3 = _a[2];
console.log("\n");
console.log("language iam Learn", skill1, "in", skill2, "at", skill3);
