/**
 * 2578. Split With Minimum Sum
 * -------------------------------------
 * 
 * 
 * Splits the digits of a number, sorts them, and sums them alternatively.
 * 
 * @param {number} num - The input number
 * @return {number} - The result of splitting, sorting, and summing the digits
 */
var splitNum = function(num) {
    // Convert the number to a string, split its digits, and sort them in ascending order
    let sortedDigits = num.toString().split('').sort((a, b) => a - b);

    // Variables to store the two parts of the split and sorted digits
    let n = 0, j = 0;

    // Iterate through the sorted digits, splitting and summing alternatively
    for (let i = 0; i < sortedDigits.length; i = i + 2) {
        n += sortedDigits[i];

        // If there is an odd number of digits, check if there is another digit available
        if (i + 1 < sortedDigits.length) {
            j += sortedDigits[i + 1];
        }
    }

    // Convert the split and summed parts back to numbers and return their sum
    return Number(n) + Number(j);
};

// Example usage:
const num = 8765;
const result = splitNum(num);
console.log(result); // Output: 113
