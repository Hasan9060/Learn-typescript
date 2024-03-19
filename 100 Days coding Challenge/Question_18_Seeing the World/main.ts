// Question : 18
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

// Making a Array o countries and Print its original order
let countriesToVisit : string[] = ["china", "japan","Russia","canada"];
console.log("orginal order:", countriesToVisit);

// print the array in Alphabetical order without modifying the actual Array list
console.log("Alphabetical Order:", [...countriesToVisit].sort());

// Show that the array in reversed order without modifying the actual array list
console.log("Still in orginal order:", countriesToVisit);

// Print the arrray in Reversed Order without modifying the actual Array list
console.log("Reverse Order:", [...countriesToVisit].reverse());

// Show that the array in reversed order without modifying the actual array list
console.log("Still in orginal order:", countriesToVisit);

// we have changed the orginal array order now 
console.log("Orginal Array Reversed:", countriesToVisit.reverse());

// print the array to show that it's back to its original order
console.log("back to orginal order:", countriesToVisit.reverse());

// Print the array to show that its order has been changed in Alphabetical order now
console.log("Sorted in Alphabetical order:", countriesToVisit.sort())

// we have changed the orginal array order now  in reverse order again
console.log("Orginal Array Reversed:", countriesToVisit.reverse());
