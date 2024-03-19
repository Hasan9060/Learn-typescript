// Question : 50
/*Multiline Template Literals: Use template literals to create a multiline string
 that describes your ideal day. Include at least three different activities.*/
// Make the function of day routine
function describeIdealDay() {
    var morningActivity = "I'd cycling in the morning";
    var afternoonActivity = "I'd practice of coding Typescript";
    var eveningActivity = "I'd play a cricket";
    return "\n        My ideal day would be spent as follows:\n        - In the **morning**, I'd start by ".concat(morningActivity, ".\n        - During the **afternoon**, I'd enjoy ").concat(afternoonActivity, ".\n        - As the **evening** approaches, I'd unwind by ").concat(eveningActivity, ".\n    ");
}
// print the routine
console.log(describeIdealDay());
