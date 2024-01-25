//1512. Number of Good Pairs


/**
 * Count the number of identical pairs in an array.
 * @param nums The array of integers.
 * @returns The number of identical pairs.
 */
function numIdenticalPairs(nums: number[]): number {
    let i = 0, j = 1, res = 0;

    // Iterate through the array of integers
    while (i < nums.length) {
        // Check if the element at index i is equal to the element at index j
        if (nums[i] === nums[j]) {
            // If yes, increment the result counter and move to the next index j
            res++;
            j++;
        } else {
            // If the elements are not equal
            if (j < nums.length) {
                // If j is within bounds, move to the next index j
                j++;
            } else {
                // If j is out of bounds, move to the next index i and reset j
                i++;
                j = i + 1;
            }
        }
    }
    return res;
}
