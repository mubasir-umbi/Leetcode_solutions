/**
 * 1347. Minimum Number of Steps to Make Two Strings Anagram
 * ----------------------------------------------------------------
 * 
 * 
 * Given two strings s and t, returns the minimum number of steps required to make 
 * the character counts in both strings equal.
 * 
 * @param s First string
 * @param t Second string
 * @returns Minimum number of steps
 */
function minSteps(s: string, t: string): number {
    // Create two objects to store character counts for each string
    const obj1: { [key: string]: number } = {};
    const obj2: { [key: string]: number } = {};

    // Iterate through both strings to populate the character count objects
    let i = 0;
    while (i < s.length || i < t.length) {
        if (i < s.length) {
            obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        }
        if (i < t.length) {
            obj2[t[i]] = (obj2[t[i]] || 0) + 1;
        }
        i++;
    }

    // Initialize the result variable to store the minimum number of steps
    let res = 0;

    // Iterate through the character counts of the second string
    for (let count in obj2) {
        // Calculate the difference in counts and add it to the result
        res += Math.max(0, obj2[count] - (obj1[count] || 0));
    }

    // Return the minimum number of steps required
    return res;
}

// Example usage:
const s = "anagram";
const t = "mangaar";
const result = minSteps(s, t);
console.log(result);
