/**
 * 451. Sort Characters By Frequency
 * -----------------------------------
 * 
 * 
 * Sorts the characters of the input string by their frequency in descending order.
 * 
 * @param {string} s - The input string
 * @returns {string} - The sorted string by frequency
 */
function frequencySort(s: string): string {
    // Object to store frequency and concatenated string for each character
    const obj: { [char: string]: [number, string] } = {};

    // Iterate through the characters of the input string
    for (let i = 0; i < s.length; i++) {
        // If the character is not in the object, initialize its entry
        if (!obj[s[i]]) {
            obj[s[i]] = [1, s[i]];
        } else {
            // If the character is already in the object, update its frequency and concatenated string
            obj[s[i]][0] += 1;
            obj[s[i]][1] += s[i];
        }
    }

    // Convert object values to an array and sort based on frequency in descending order
    const objArr = Object.values(obj);
    objArr.sort((a, b) => b[0] - a[0]);

    // Concatenate the sorted strings to form the result
    let res = '';
    for (let i = 0; i < objArr.length; i++) {
        res += objArr[i][1];
    }

    // Return the final sorted string by frequency
    return res;
}

// Example usage:
const re = frequencySort('tree');
console.log(re); // Output: 'eert' or 'eetr' (characters with the same frequency can have different orders)
