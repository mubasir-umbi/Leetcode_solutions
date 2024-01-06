/**
 * 2870. Minimum Number of Operations to Make Array Empty
 * -------------------------------------------------------------------
 * 
 * Calculates the minimum number of operations to make all elements have equal occurrences.
 * 
 * @param {number[]} nums - The input array of numbers
 * @returns {number} - The minimum number of operations, or -1 if not possible
 */
function minOperations(nums: number[]): number {
    // Object to store the frequency count of each number
    const obj = {};

    // Count the occurrences of each number in the array
    for (let i = 0; i < nums.length; i++) {
        if (!obj[nums[i]]) {
            obj[nums[i]] = 1;
        } else {
            obj[nums[i]] += 1;
        }
    }

    // Variable to store the total number of operations
    let c = 0;

    // Iterate through the frequency count object
    for (let k in obj) {
        if (obj[k] === 1) {
            return -1; // If any element has only one occurrence, it's not possible to make all occurrences equal
        } else if (obj[k] % 3 === 0) {
            c += obj[k] / 3; // If the occurrence is a multiple of 3, no additional operations needed
        } else if (obj[k] % 3 === 1 || obj[k] % 3 === 2) {
            c += Math.floor(obj[k] / 3) + 1; // If the occurrence is not a multiple of 3, calculate additional operations
        }
    }

    // Return the total number of operations
    return c;
}

// Example usage:
const nums = [2, 2, 2, 3, 3, 3, 4];
const result = minOperations(nums);
console.log(result); // Output: 3
