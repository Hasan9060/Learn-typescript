// Question : 29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// Make  an array called "favorite_fruits"                                  
var favorite_fruits = ["Blueberries", "Strawberries", "Mango"];
// Creating 5 if statement
if (favorite_fruits.includes("Strawberries")) {
    console.log("\nMango is a favorite of mine");
}
if (favorite_fruits.includes("Bananas")) {
    console.log("\nBananas is a favorite of mine");
}
if (favorite_fruits.includes("Blueberries")) {
    console.log("\nBluebarries is a favourite of mine");
}
if (favorite_fruits.includes("PineApple")) {
    console.log("\nI love Pineapples too!");
}
if (favorite_fruits.includes("Grapes")) {
    console.log("\nI really like Grapes");
}
