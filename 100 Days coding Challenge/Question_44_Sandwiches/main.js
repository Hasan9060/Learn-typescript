// Question : 44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides,
// and it should print a summary of the sandwich that is being ordered. Call the function three times,
// using a different number of arguments each time.
function Sandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    // ingredients into a summary string.
    var summary = "A sandwich with ".concat(ingredients.join(', '), " is being ordered.");
    console.log(summary);
}
// ingredient lists.
console.log("\n");
Sandwich('beef', 'cheese', 'mayo sauce');
console.log("\n");
Sandwich('chicken', 'lettuce', 'tomato');
console.log("\n");
Sandwich('peanut butter', 'jelly');
