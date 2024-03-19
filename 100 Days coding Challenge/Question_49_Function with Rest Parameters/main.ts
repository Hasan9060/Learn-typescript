// Question : 49

/*Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies.
 It should log each hobby with a statement saying you enjoy that hobby.*/

//  Make Function of hobbies:-
 function logHobbies(...hobbies: string[]): void {
    hobbies.forEach((hobby) => {
        console.log(`My favourite hobby is ${hobby}.`);
    });
}

// print the function
console.log("\n")
logHobbies("Make a 3D Model", "Reading", "swimming", "Cycling");






