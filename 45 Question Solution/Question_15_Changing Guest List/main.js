"use strict";
// Question : 15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
Object.defineProperty(exports, "__esModule", { value: true });
var guestList = ["Ali", "Rafay", "Sara", "Mohammad", "Imran"];
var dontCome = guestList[0];
console.log(dontCome, "Sorry i  can't come to the party");
guestList.splice(0, 1, "Usama");
guestList.forEach(function (guest) { return console.log("Assalam Walikum ".concat(guest, ",Let\u2019s celebrate the joys of life together over a delicious meal. Join us for a dinner party at our home. ")); });
