// Question : 26

//  Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

// Variables
export{}
let AlienColor = "Green"

// First Version
if(AlienColor === "Green"){
    console.log ("\nThe player just earned 5 points for shooting the alien.")
}
else {
    console.log("\nThe player just earned 10 points for shooting the alien.")
}

// Second Version
if(AlienColor == "Red"){
    console.log ("\nthere is Red alien here!")
}
else{
    console.log ("\nthere is no Red alien here!")
}