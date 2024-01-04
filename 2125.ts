/**
 * 2125. Number of Laser Beams in a Bank
 * --------------------------------------
 * 
 * 
 * Calculates the number of beams formed by consecutive groups of '1's in each string of a string array.
 * 
 * @param {string[]} bank - The input string array
 * @returns {number} - The total number of beams
 */
function numberOfBeams(bank: string[]): number {
    // Array to store the counts of '1's in each string
    const res: number[] = [];

    // Variable to store the total number of beams
    let ans = 0;

    // Iterate through each string in the array
    for (let i = 0; i < bank.length; i++) {
        let countOfOnes = 0;

        // Count the number of '1's in the current string
        for (let j = 0; j < bank[i].length; j++) {
            if (bank[i][j] === '1') {
                countOfOnes++;
            }
        }

        // If there is at least one '1' in the current string
        if (countOfOnes > 0) {
            res.push(countOfOnes);

            // If there is more than one count in the array, calculate the number of beams formed
            if (res.length > 1) {
                ans += res[res.length - 2] * res[res.length - 1];
            }
        }
    }

    // Return the total number of beams
    return ans;
}

// Example usage:
const bank = ["001", "111", "1001"];
const result = numberOfBeams(bank);
console.log(result); // Output: 9
