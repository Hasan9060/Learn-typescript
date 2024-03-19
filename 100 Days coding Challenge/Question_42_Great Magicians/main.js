// Question : 42
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase 
// the Great to each magician’s name. Call show_magicians() to see that the list 
// has actually been modified.
function make_great(magicianNames) {
    for (var i = 0; i < magicianNames.length; i++) {
        magicianNames[i] += " is the Great Magician";
    }
}
var originalMagicians = ["Harry potter", "David Copperfield", "Penn Jillette"];
var modifiedMagicians = __spreadArray([], originalMagicians, true);
make_great(modifiedMagicians);
console.log("\n");
console.log("Original Magicians:");
console.log(originalMagicians.join(", "));
console.log("\nModified Magicians:");
console.log(modifiedMagicians.join(", "));
