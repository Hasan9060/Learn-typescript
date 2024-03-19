// Question : 48
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/*Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops.
Use the spread operator to combine these arrays into a single array sorted in ascending order,
then log the result.*/
var laptopPricesSet1 = [12000, 8000, 15000];
var laptopPricesSet2 = [10000, 13000, 9500];
// Combine the arrays using the spread operator
var combinedPrices = __spreadArray(__spreadArray([], laptopPricesSet1, true), laptopPricesSet2, true);
// Sort the combined prices in ascending order
combinedPrices.sort(function (a, b) { return a - b; });
// Log the sorted prices
console.log("\n");
console.log("Combined and sorted laptop prices:", combinedPrices);
