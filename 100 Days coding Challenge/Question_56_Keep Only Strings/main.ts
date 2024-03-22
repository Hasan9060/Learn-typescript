// Question : 56

/*Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.*/

let mixedItems: (string | number | boolean)[] = ['Sparrow', 42, true, 'Cat', false, 23, 'Lion'];

let  onlyString: string[] = mixedItems.filter(item => typeof item === 'string');
console.log("\n")
console.log(onlyString);

 
  










