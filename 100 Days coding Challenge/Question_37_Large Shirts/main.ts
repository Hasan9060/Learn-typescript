// Question : 37

// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message 
// that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and
//  a shirt of any size with a different message.


// Make a large shirt and a medium shirt with the default message:-
function make_shirt (size : string = "Large" , Label : string = "I love Typescript"): void{
    console.log("\n")
    console.log(`You have order a ${size} shirt that Label is ${Label}`)
} 

make_shirt();
make_shirt("Medium")

// Different message
make_shirt("Small", " I Required a Big shirt to wear")                                                                                                                                                              