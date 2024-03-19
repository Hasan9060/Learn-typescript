// Question : 43

// Unchanged Magicians: Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array. 
// Call show_magicians() with each array to show that you have one array of
// the original names and one array with the Great added to each magician’s name.


// Make a varibles of magician names:
const magicians: string[] = ['Harry Pottery', 'David ', 'johan'];

function makeGreat(originalMagicians: string[]): string[] {
    const greatMagicians: string[] = [];

// Make each magician great and add it to greatMagicians.
    for (const magician of originalMagicians) {
        const greatMagician = magician + ' the Great';
        greatMagicians.push(greatMagician);
    }

    return greatMagicians;
}

function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// makeGreat with original magicians array.
const greatMagicians = makeGreat([...magicians]);

console.log('\nGreat magicians:');
showMagicians(greatMagicians);

console.log('\nOriginal magicians:');
showMagicians(magicians);
