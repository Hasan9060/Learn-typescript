// Question : 49
/*Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies.
 It should log each hobby with a statement saying you enjoy that hobby.*/
//  Make Function of hobbies:-
function logHobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach(function (hobby) {
        console.log("My favourite hobby is ".concat(hobby, "."));
    });
}
// print the function
console.log("\n");
logHobbies("Make a 3D Model", "Reading", "swimming", "Cycling");
