"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// creating a guest list Array
var guestlist = ["Imran", "ali", "Muhammad", "Sara"];
// making variable for those guest who cant come
var dontCome = guestlist[0];
// print the nae of guest who cant come
console.log(dontCome, "he don't come to the party");
// Add or remove values from guest list Array
guestlist.splice(0, 1, "Abdullah");
// Adding a new value at string index of array
console.log("Good News ! We have found a bigger dinner table.");
// Adding a new value at starting index of array
guestlist.unshift("Rohan");
guestlist.unshift("Ayesha");
// Adding a new value at ending index of array
guestlist.push("Younus");
guestlist.push("Murtaza");
// Get a middle index of array to guest
var middleIndex = Math.floor(guestlist.length / 2);
// Adding a new guest at middle index of array
guestlist.splice(middleIndex, 0, "Zeeshan");
// print message of updated list
console.log("updated List of our guests");
// sending a invitation message to our guest one by one with thier names
guestlist.forEach(function (oneguest) { return console.log("hello ".concat(oneguest, ",would you like to dinner with me")); });
