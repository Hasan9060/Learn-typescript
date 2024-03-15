// Question : 41

// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.


// Creating function show_magicians :-
function show_magicians(magicianNames: string[]): void {
    for (const name of magicianNames) {
        console.log(name);
    }
}

let magicians: string[] = ["Harry Potter", "David Copperfield", "Penn Jillette"];
console.log("\n")
show_magicians(magicians);
