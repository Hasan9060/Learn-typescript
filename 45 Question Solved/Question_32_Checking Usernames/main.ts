// Question : 32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

// array of current users
let current_users = ["Amir","Hasan","Wajid","Asad","Hamza"]

// Array of new Users
let new_users = ["Hamza","AMIR","Asad","Naeem","Zahid"]

// loop through new_users to check for usernames avaibilty
new_users.forEach(new_one_user => {

    // Creating a Condtion for Username already exist and save in our condtion caraible
let Condition =current_users.some(current_one_users => current_one_users.toLowerCase() === new_one_user.toLowerCase())

// Print different message using If-else staements
    if(Condition){
        console.log(`This Account ${new_one_user} is already taken`)
    }else{
        console.log(`the Username ${new_one_user} is available`)
    }
    })
