/**
 * 
 * 300. Longest Increasing Subsequence
 * ----------------------------------------
 * 
 * 
 * Calculates the length of the Longest Increasing Subsequence (LIS) in an array.
 * 
 * @param {number[]} nums - The input array of numbers
 * @returns {number} - The length of the LIS
 */
function lengthOfLIS(nums: number[]): number {
    // Check if the input array is empty
    if (!nums || nums.length === 0) {
        return 0;
    }

    // Initialize an array dp to store the length of LIS ending at each index
    const dp = new Array(nums.length).fill(1);

    // Iterate through the array to calculate the LIS at each index
    for (let i = 1; i < nums.length; ++i) {
        for (let j = 0; j < i; ++j) {
            // If the current number is greater than the previous number, update the LIS length
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    // Return the maximum value in the dp array, which represents the overall LIS length
    return Math.max(...dp);
}

// Example usage:
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
const result = lengthOfLIS(nums);
console.log(result); // Output: 4
