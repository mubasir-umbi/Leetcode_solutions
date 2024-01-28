//2640. Find the Score of All Prefixes of an Array

/**
 * Calculates the prefix score for an array of numbers.
 * The prefix score is calculated based on the sum of each element along with the maximum element encountered so far.
 * @param nums An array of numbers.
 * @returns An array containing the prefix score for each position in the input array.
 */


function findPrefixScore(nums: number[]): number[] {
    let t = 0, max = Number.MIN_SAFE_INTEGER
    const res: number[] = []

    // Iterate through each element in the input array.
    for(let i = 0; i < nums.length; i++){
        // Update the maximum element encountered so far.
        max = Math.max(max, nums[i])

        // Calculate the prefix score by adding the current element, the maximum element, and the running total.
        t += nums[i] + max

        // Store the calculated prefix score in the result array.
        res.push(t)
    }

    return res
};

