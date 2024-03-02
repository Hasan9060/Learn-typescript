var persoName = "Syed Hasan";
console.log(persoName.toLowerCase());
console.log(persoName.toUpperCase());
console.log(persoName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
