// Question : 38
// Cities: Write a function called describe_city() that accepts the name 
// of a city and its country. The function should print a simple sentence,
// such as Karachi is in Pakistan. Give the parameter for the country a 
// default value. Call your function for three different cities, at least one
// of which is not in the default country.
// Make a function describe_city():-
function describe_city(city, country) {
    if (country === void 0) { country = "Unknown"; }
    console.log("\n");
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("Karachi", "Pakistan"); // Defaults Sentence
describe_city("Tokyo", "Japan");
describe_city("Sydney", "Australia");
describe_city("Moscow", "Russia");
describe_city("New York"); // Not Defaults  Default sentence
