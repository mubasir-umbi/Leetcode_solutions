// 205. Isomorphic Strings

/**
 * Checks if two input strings are isomorphic.
 * Two strings are isomorphic if each character in the first string can be mapped to a character in the second string
 * such that the positions of the characters are preserved.
 * @param s The first input string.
 * @param t The second input string.
 * @returns True if the strings are isomorphic, false otherwise.
 */

function isIsomorphic(s: string, t: string): boolean {
    const memo1: {[key: string]: string} = {};
    const memo2: {[key: string]: string} = {};

    // If the lengths of the two strings are different, they cannot be isomorphic.
    if (s.length !== t.length) return false;

    for (let i = 0; i < s.length; i++) {
        // Check mapping from s to t.
        if (!memo1[s[i]]) {
            memo1[s[i]] = t[i];
        } else {
            // If a mapping already exists, check if it matches the current character in t.
            if (memo1[s[i]] !== t[i]) {
                return false; // Not isomorphic.
            }
        }

        // Check mapping from t to s.
        if (!memo2[t[i]]) {
            memo2[t[i]] = s[i];
        } else {
            // If a mapping already exists, check if it matches the current character in s.
            if (memo2[t[i]] !== s[i]) {
                return false; // Not isomorphic.
            }
        }
    }

    // If the loop completes without returning false, the strings are isomorphic.
    return true;
}
