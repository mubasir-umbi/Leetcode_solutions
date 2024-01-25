/**
 * 1624. Largest Substring Between Two Equal Characters
 * --------------------------------------------------------
 * 
 * 
 * Finds the maximum distance between equal characters in the input string.
 * 
 * @param {string} s - The input string
 * @returns {number} - The maximum distance between equal characters, or -1 if none are found
 */
function maxLengthBetweenEqualCharacters(s: string): number {
    // Object to store the index of the first occurrence of each character
    const obj: { [char: string]: number } = {};

    // Variable to store the maximum distance between equal characters
    let max = Number.MIN_SAFE_INTEGER;

    // Iterate through the characters of the input string
    for (let i = 0; i < s.length; i++) {
        if (!obj[s[i]]) {
            // If the character is encountered for the first time, store its index
            obj[s[i]] = i + 1;
        } else {
            // If the character is encountered again, update the maximum distance
            let distance = i - obj[s[i]];
            if (distance > max) {
                max = distance;
            }
        }
    }

    // Return the maximum distance if it is non-negative; otherwise, return -1
    return max >= 0 ? max : -1;
}

// Example usage:
const r = maxLengthBetweenEqualCharacters('abca');
console.log(r); // Output: 2
