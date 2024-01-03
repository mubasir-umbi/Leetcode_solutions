/**
 * 1160. Find Words That Can Be Formed by Characters
 * ------------------------------------------------------
 * 
 * 
 * Counts the total length of words that can be formed from characters in a given string array.
 * 
 * @param {string[]} words - The input string array of words
 * @param {string} chars - The input string of characters
 * @returns {number} - The total length of words that can be formed
 */
function countCharacters(words: string[], chars: string): number {
    let result = 0;

    // Count the occurrences of characters in the input string 'chars'
    const charsCount: { [char: string]: number } = charCount(chars);

    // Iterate through each word in the array
    for (let word of words) {
        // Count the occurrences of characters in the current word
        const wordCount: { [char: string]: number } = charCount(word);

        // Check if the current word can be formed from the available characters
        const canFormWord = Object.keys(wordCount).every(char => wordCount[char] <= (charsCount[char] || 0));

        // If the word can be formed, add its length to the result
        if (canFormWord) {
            result += word.length;
        }
    }

    // Return the total length of words that can be formed
    return result;
}

/**
 * Counts the occurrences of characters in a string.
 * 
 * @param {string} str - The input string
 * @returns {Object} - An object with character occurrences
 */
function charCount(str: string): { [char: string]: number } {
    const count: { [char: string]: number } = {};
    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }
    return count;
}

// Example usage:
const words = ["cat", "bt", "hat", "tree"];
const chars = "atach";
const resu = countCharacters(words, chars);
console.log(resu); // Output: 6
