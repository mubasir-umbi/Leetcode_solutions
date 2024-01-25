/**
 * 1704. Determine if String Halves Are Alike
 * --------------------------------------------------------
 * 
 * Given a string, checks if the number of vowels in the first half
 * is equal to the number of vowels in the second half.
 * 
 * @param {string} s - The input string
 * @returns {boolean} True if the number of vowels in the first half is equal to the second half; otherwise, false.
 */
var halvesAreAlike = function(s) {
    // Array of vowels
    const v = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    
    // Initialize counters for the number of vowels in the first and second halves
    let a = 0, b = 0;
    
    // Initialize two pointers, one at the beginning and one at the end of the string
    let i = 0, j = s.length - 1;
    
    // Iterate through the string until the pointers meet in the middle
    while (i < j) {
        // Check if the character at the ith position is a vowel and increment the count for the first half
        if (v.includes(s[i])) {
            a++;
        }
        // Check if the character at the jth position is a vowel and increment the count for the second half
        if (v.includes(s[j])) {
            b++;
        }
        
        // Move the pointers towards the middle
        i++;
        j--;
    }
    
    // Return true if the number of vowels in the first half is equal to the second half; otherwise, return false
    return a === b;
};
