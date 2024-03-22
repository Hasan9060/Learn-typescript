// Question : 55
/*Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.*/
var mixedItems = ['Sparrow', 42, true, 'Cat', false, 23, 'Lion'];
var onlyString = mixedItems.filter(function (item) { return typeof item === 'string'; });
console.log("\n");
console.log(onlyString);
