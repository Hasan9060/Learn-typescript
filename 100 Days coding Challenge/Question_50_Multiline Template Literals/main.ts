// Question : 50

/*Multiline Template Literals: Use template literals to create a multiline string 
that describes your ideal day. Include at least three different activities.*/

// Make the function of day routine
function describeIdealDay(): string {
    const morningActivity = "I'd cycling in the morning";
    const afternoonActivity = "I'd practice of coding Typescript";
    const eveningActivity = "I'd play a cricket";

    return `
        My ideal day would be spent as follows:
        - In the **morning**, I'd start by ${morningActivity}.
        - During the **afternoon**, I'd enjoy ${afternoonActivity}.
        - As the **evening** approaches, I'd unwind by ${eveningActivity}.
    `;
}
// print the routine
console.log(describeIdealDay());






