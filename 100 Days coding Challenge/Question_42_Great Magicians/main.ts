// Question : 42

// Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase 
// the Great to each magician’s name. Call show_magicians() to see that the list 
// has actually been modified.

// creating function of great magician:-
function make_great(magicianNames: string[]): void {
    for (let i = 0; i < magicianNames.length; i++) {
        magicianNames[i] += " is the Great Magician";
    }
}

const originalMagicians: string[] = ["Harry potter", "David Copperfield", "Penn Jillette"];
const modifiedMagicians: string[] = [...originalMagicians]; 

make_great(modifiedMagicians);
console.log("\n")
console.log("Original Magicians:");
console.log(originalMagicians.join(", "));

console.log("\nModified Magicians:");
console.log(modifiedMagicians.join(", "));


