/**
 * 2710. Remove Trailing Zeros From a String
 * ------------------------------------------------
 * 
 * 
 * Removes trailing zeros from a numeric string.
 * 
 * @param {string} num - The input numeric string
 * @returns {string} - The string with trailing zeros removed
 */
function removeTrailingZeros(num: string) {
    // Iterate through the string from right to left
    for (let i = num.length - 1; i >= 0; i--) {
        // If the current digit is '0', continue to the next digit
        if (num[i] === '0') {
            continue;
        } else {
            // If a non-zero digit is found, return the substring up to this digit
            return num.slice(0, i + 1);
        }
    }
}

// Example usage:
const inputNumber = "1204000";
const result = removeTrailingZeros(inputNumber);
console.log(result); // Output: "1204"


