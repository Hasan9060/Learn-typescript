// Question : 39

// City Names: Write a function called city_country() that takes in the name of a city and its country. 
// The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.

// Making City country Function:-
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

//  make a variables of City:-
let city1 = city_country("Quetta", "Pakistan");
let city2 = city_country("Moscow", "Russia");
let city3 = city_country("New York", "United States");
let city4 = city_country("Washington", "United States");
let city5 = city_country("Melbourne" , "Australia");
let city6 = city_country("Auckland", "New Zealand");
let city7 = city_country("Istanbul",  "Turkey");

// Print one by one :-
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
console.log(city5);
console.log(city6);
console.log(city7);
