// 3005. Count Elements With Maximum Frequency

/**
 * Find the sum of elements with the maximum frequency in an array of integers.
 * @param nums The array of integers.
 * @returns The sum of elements with the maximum frequency.
 */
function maxFrequencyElements(nums: number[]): number {
    // Memo object to store the frequency of each integer
    const memo: { [key: number]: number } = {};

    // Initialize variables to keep track of maximum frequency and result sum
    let mF = 0; // mF represents maxFrequency
    let res = 0; // res represents resultSum

    // Iterate through the array of integers
    for (let num of nums) {
        // Update the frequency of the current integer in the memo object
        memo[num] = (memo[num] || 0) + 1;

        // Check if the frequency of the current integer is greater than the current max frequency
        if (memo[num] > mF) {
            // If yes, update maxFrequency and reset resultSum
            mF = memo[num];
            res = 0;
        }

        // If the frequency of the current integer is equal to the current max frequency
        if (memo[num] === mF) {
            // Add the current integer to the result sum
            res += num;
        }
    }

    // Return the sum of elements with the maximum frequency
    return res;
}