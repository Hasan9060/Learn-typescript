// Question : 18
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a Array o countries and Print its original order
var countriesToVisit = ["china", "japan", "Russia", "canada"];
console.log("orginal order:", countriesToVisit);
// print the array in Alphabetical order without modifying the actual Array list
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
// Show that the array in reversed order without modifying the actual array list
console.log("Still in orginal order:", countriesToVisit);
// Print the arrray in Reversed Order without modifying the actual Array list
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
// Show that the array in reversed order without modifying the actual array list
console.log("Still in orginal order:", countriesToVisit);
// we have changed the orginal array order now 
console.log("Orginal Array Reversed:", countriesToVisit.reverse());
// print the array to show that it's back to its original order
console.log("back to orginal order:", countriesToVisit.reverse());
// Print the array to show that its order has been changed in Alphabetical order now
console.log("Sorted in Alphabetical order:", countriesToVisit.sort());
// we have changed the orginal array order now  in reverse order again
console.log("Orginal Array Reversed:", countriesToVisit.reverse());
