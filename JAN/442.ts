// 442. Find All Duplicates in an Array

/**
 * Find duplicates in an array of integers.
 * @param nums The array of integers.
 * @returns An array containing the duplicate integers.
 */
function findDuplicates(nums: number[]): number[] {
    // Result array to store duplicate integers
    const res: number[] = [];

    // Memo object to keep track of encountered integers
    const memo: { [key: number]: boolean } = {};

    // Iterate through the array of integers
    for (let num of nums) {
        // Check if the current integer is already in the memo object
        if (!memo[num]) {
            // If not, mark it as encountered
            memo[num] = true;
        } else {
            // If already encountered, add it to the result array as a duplicate
            res.push(num);
        }
    }

    // Return the result array containing the duplicate integers
    return res;
}
