// Question : 16
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
export{}
// creating a guest list Array
let guestlist = ["Imran","ali","Muhammad", "Sara"];

// making variable for those guest who cant come
let dontCome = guestlist[0]

// print the nae of guest who cant come
console.log(dontCome, "he don't come to the party");

// Add or remove values from guest list Array
guestlist.splice(0,1,"Abdullah");

// Adding a new value at string index of array
console.log("Good News ! We have found a bigger dinner table.")

// Adding a new value at starting index of array
guestlist.unshift("Rohan")
guestlist.unshift("Ayesha")

// Adding a new value at ending index of array
guestlist.push("Younus");
guestlist.push("Murtaza");

// Get a middle index of array to guest
let middleIndex: number = Math.floor(guestlist.length /2)

// Adding a new guest at middle index of array
guestlist.splice(middleIndex,0,"Zeeshan");

// print message of updated list
console.log("updated List of our guests")

// sending a invitation message to our guest one by one with thier names
guestlist.forEach(oneguest => console.log(`hello ${oneguest},would you like to dinner with me`));

// Inform that only two guests can be invited form dinner
console.log("Unfortunately, the new dinner dinner table wont deliver on time, so I am only invite two Guests to dinner with me");

// Using while-loop to remove guests form the array until only two names remain
while(guestlist.length >2) {
    let removedGuest = guestlist.pop();
    console.log(`sorry, ${removedGuest} I cant invite you to dinner`);
}

// Sending a invitation to the last two guest on the list!
console.log("invitaion to the last Guest");
guestlist.forEach(lastwo => console.log(`luckly ${lastwo},you are still invited to dinner`));

// Removing last two guest form the list
guestlist.pop();
guestlist.pop();
console.log("Empty list", guestlist)