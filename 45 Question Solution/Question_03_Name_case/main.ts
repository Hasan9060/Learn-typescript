let persoName : string = "Syed Hasan";

console.log(persoName.toLowerCase());

console.log(persoName.toUpperCase());

console.log(persoName.replace(/\b\w/g, (char) => char.toUpperCase()));