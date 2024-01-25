/**
 * 2785. Sort Vowels in a String
 * ------------------------------------------------
 * 
 * 
 * Sorts vowels in a string while maintaining the original positions of consonants.
 * 
 * @param {string} s - The input string
 * @returns {string} - The string with sorted vowels
 */
var sortVowels = function(s) {
    // Array of vowels
    const v = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    // Arrays to store tuples [index, value] of vowels and the result array
    const vowelIndices = [];
    const resultArray = [];

    // Iterate through the input string
    for (let i = 0; i < s.length; i++) {
        // If the character is a vowel, store its index and value in the vowelIndices array
        if (v.includes(s[i])) {
            vowelIndices.push([i, s[i]]);
            resultArray.push(null); // Placeholder for vowels
        } else {
            resultArray.push(s[i]); // Store consonants directly in the resultArray
        }
    }

    // Sort the vowelIndices array based on the character code of the vowels
    vowelIndices.sort((a, b) => a[1].charCodeAt(0) - b[1].charCodeAt(0));

    // Reconstruct the result array with sorted vowels
    let vowelIndex = 0;
    for (let i = 0; i < resultArray.length; i++) {
        if (resultArray[i] === null) {
            resultArray[i] = vowelIndices[vowelIndex][1];
            vowelIndex++;
        }
    }

    // Join the resultArray to form the final string
    return resultArray.join('');
};
