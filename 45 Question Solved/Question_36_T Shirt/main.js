// Question : 36
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message 
// that should be printed on the shirt. The function should print a sentence summarizing the size 
// of the shirt and the message printed on it. Call the function.
function make_shirt(size, label) {
    // return size + Labels
    return "my Shirt size is ".concat(size, " and label is ").concat(label);
}
console.log("\n");
var mydesign = make_shirt(34, "Stop Talking Start Doing");
// Print on console
console.log(mydesign);
