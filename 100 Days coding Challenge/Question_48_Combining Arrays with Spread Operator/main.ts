// Question : 48

/*Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. 
Use the spread operator to combine these arrays into a single array sorted in ascending order, 
then log the result.*/

const laptopPricesSet1: number[] = [12000, 8000, 15000];
const laptopPricesSet2: number[] = [10000, 13000, 9500];

// Combine the arrays using the spread operator
const combinedPrices: number[] = [...laptopPricesSet1, ...laptopPricesSet2];

// Sort the combined prices in ascending order
combinedPrices.sort((a, b) => a - b);

// Log the sorted prices
console.log("\n")
console.log("Combined and sorted laptop prices:", combinedPrices);





