
// 645. Set Mismatch



function findErrorNums(nums: number[]): number[] {
    // Create an object to store whether a number has been encountered
    const memo: { [key: number]: boolean } = {};
    
    // Result array to store the duplicate and missing numbers
    const res: number[] = [];
    
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // Check if the current number is already in the memo object
        if (!memo[nums[i]]) {
            // If not, mark it as encountered
            memo[nums[i]] = true;
        } else {
            // If already encountered, add it to the result array as a duplicate
            res.push(nums[i]);
        }
    }
    
    // Create a set to store unique numbers in the array
    const mySet = new Set(nums);
    
    // Iterate through the expected range of numbers (1 to nums.length)
    for (let i = 1; i <= nums.length; i++) {
        // Check if the current number is not in the set
        if (!mySet.has(i)) {
            // If not in the set, add it to the result array as a missing number
            res.push(i);
        }
    }
    
    // Return the result array containing the duplicate and missing numbers
    return res;
}
