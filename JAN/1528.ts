//1528. Shuffle String

/**
 * Restore the original string based on shuffled characters and their corresponding indices.
 * @param s The shuffled string.
 * @param indices The array of indices representing the original order of characters.
 * @returns The restored original string.
 */
function restoreString(s: string, indices: number[]): string {
    // Result array to store characters in their correct order
    let res: string[] = [];

    // Iterate through the indices array
    for (let i = 0; i < indices.length; i++) {
        // Get the current index from the indices array
        let k = indices[i];

        // Place the character at the correct position in the result array
        res[k] = s[i];
    }

    // Join the characters in the result array to form the restored original string
    return res.join('');
}
