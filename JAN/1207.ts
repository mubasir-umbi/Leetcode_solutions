/**
 * 1207. Unique Number of Occurrences
 * --------------------------------------------
 * 
 * 
 * 
 * Checks if the occurrences of elements in the array are unique.
 * @param arr The input array of numbers.
 * @returns True if occurrences are unique, false otherwise.
 */
function uniqueOccurrences(arr: number[]): boolean {
    // Intuition: Count the occurrences of each element and check if the counts are unique.

    // Approach:
    // 1. Use a memo object to store the count of occurrences for each element.
    // 2. Iterate through the array and update the counts in the memo object.
    // 3. Extract the values (counts) from the memo object.
    // 4. Check if the length of the values array is equal to the size of a Set created from the values.
    //    If true, all counts are unique; otherwise, there are duplicates.

    const memo: Record<number, number> = {};

    // Count occurrences of each element
    for (let i = 0; i < arr.length; i++) {
        memo[arr[i]] = (memo[arr[i]] || 0) + 1;
    }

    // Extract counts from the memo object
    const values = Object.values(memo);

    // Check if the counts are unique
    return values.length === new Set(values).size;
}

// Complexity:
// - Time complexity: O(n) - Iterating through the array once.
// - Space complexity: O(n) - Using a memo object to store counts.
