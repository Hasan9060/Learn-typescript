// Question : 24

// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

// variables
let Birds = "Sparrow";
let capitalBirds = "SPARROW";
let  Sixty = 60;
let  thirtyseven = 37;
let Vegetables = ["Potato, Carrot", "Onion", "Tomato"];

// Test for Equality of varible
console.log ("Is the bird and the sparrow equivalent?")
console.log (Birds == "Sparrow"); 

// Test for Inequality of variable.
console.log ("Is a bird not equal to a sparrow?")
console.log (Birds != "Sparrow" )

// Test for Equality using the lowerCase function
console.log ("Is SPARROW and Sparrow the same when converted to lowercase?")
console.log (capitalBirds.toLowerCase() == "sparrow") ;

// Test for Inequality using the lowerCase function
console.log ("Is SPARROW and Sparrow not the same when converted to lowercase?")
console.log (capitalBirds.toLowerCase() != "sparrow");


// Tests for Numerical values
// Inequality
console.log ("Sixty is not equivalent to thirty-seven.")
console.log (Sixty !=  thirtyseven)

// Equality
console.log ("Sixty is equivalent to thirty-seven.")
console.log (Sixty ==  thirtyseven)

// For Greater than
console.log ("Is Sixty is greater than fifty-seven?")
console.log (Sixty > 57)

// For  Less Than
console.log ("Is thirty-seven is less than thirty-six?")
console.log (thirtyseven < 36);

// For Greater  than or Equal To
console.log ("Is Sixty is greater than  or equal to seven?")
console.log (Sixty >= 7)

//For Less Than or Equal To
console.log("Is fifty is less than  or equal to Sixty? ")
console.log ( Sixty <= 50 )

// Tests using "and" and "or" operators

// Using && (AND)
console.log ("\n Sixty is not equal to thirty-seven and Sixty is greater than thirty-Seven")
console.log ((Sixty != thirtyseven) && (Sixty > thirtyseven))

console.log ("\n Sixty is not equal to thirty-seven and Sixty is greater than Eighty")
console.log ((Sixty != thirtyseven) && (Sixty > 80))

// Using || (OR)
console.log ("\n Sixty is greater than 80 OR Sixty is equal to 60")
console.log (Sixty > 80 || Sixty == 60 )

console.log ("\n Sixty is greater than 80 OR Sixty is not equal to 60")
console.log (Sixty > 80 || Sixty != 60 )

// Test whether an item is in a array
console.log ("Is Tomato include in my Vegetables array");
console.log (Vegetables.includes("Tomato"));

// Test whether an item is not in a array
console.log ("Is Mint include in my Vegetables array");
console.log (Vegetables.includes("Mint"));












