// Question : 31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// Make Array with 4 Values
var UserNames = ["Hammad", "sara", "Admin", "usman"];
// Remove all values form our array Now our array is empty
UserNames = [];
// If statement for checking lenght of our array is empty?
if (UserNames.length === 0) {
    console.log("Your array is empty there is no users!");
}
else {
    // if aaray is have users loo[ on array
    UserNames.forEach(function (oneuser) {
        if (oneuser === "Admin") {
            console.log("Hello ".concat(oneuser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneuser, ", thank you for logging in again."));
        }
    });
}
