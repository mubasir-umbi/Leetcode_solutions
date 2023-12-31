/**
 * 1897. Redistribute Characters to Make All Strings Equal
 * -----------------------------------------------------------------
 * 
 * 
 * Checks if it's possible to make all strings equal by rearranging characters.
 * 
 * @param {string[]} words - The array of words
 * @returns {boolean} - True if it's possible, false otherwise
 */
function makeEqual(words: string[]): boolean {
    // Object to store the count of occurrences for each character
    const obj: { [char: string]: number } = {};

    // If there is only one word, it's always possible to make it equal to itself
    if (words.length === 1) {
        return true;
    }

    // Concatenate all words to form a single string
    let concatenatedString = words.join('');

    // Iterate through the characters of the concatenated string
    for (let i = 0; i < concatenatedString.length; i++) {
        // If the character is not in the object, initialize its entry
        if (!obj[concatenatedString[i]]) {
            obj[concatenatedString[i]] = 1;
        } else {
            // If the character is already in the object, update its count
            obj[concatenatedString[i]] += 1;
        }
    }

    // Check if the count of each character is divisible by the number of words
    let numWords = words.length;
    for (let key in obj) {
        if (obj[key] % numWords !== 0) {
            return false;
        }
    }

    // If all characters have counts divisible by the number of words, it's possible
    return true;
}

// Example usage:
const result = makeEqual(['abc', 'aabc', 'bc']);
console.log(result); // Output: true
