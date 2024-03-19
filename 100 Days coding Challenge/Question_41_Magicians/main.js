// Question : 41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.
// Creating function show_magicians :-
function show_magicians(magicianNames) {
    for (var _i = 0, magicianNames_1 = magicianNames; _i < magicianNames_1.length; _i++) {
        var name_1 = magicianNames_1[_i];
        console.log(name_1);
    }
}
var magicians = ["Harry Potter", "David Copperfield", "Penn Jillette"];
console.log("\n");
show_magicians(magicians);
