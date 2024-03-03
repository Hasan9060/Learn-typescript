// Question : 3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var persoName = "Syed Hasan";
console.log(persoName.toLowerCase());
console.log(persoName.toUpperCase());
console.log(persoName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
