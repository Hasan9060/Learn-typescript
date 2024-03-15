"use strict";
// Question : 12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
Object.defineProperty(exports, "__esModule", { value: true });
var friendsName = ["Umer", "Ali ", "Abdullah", "Imran", "Sajid", "Usman", "Danial", "Saad", "Hammad"];
friendsName.forEach(function (friendname) { return console.log("Assalam Walikum ".concat(friendname, ", i hope you fine")); });
