// 80. Remove Duplicates from Sorted Array II
//-----------------------------------------------------------------



function removeDuplicates(nums: number[]): number {
    // Initialize pointers i and j, and counter c.
    let i = 0, j = 1, c = 1;

    // Iterate through the array.
    while (j < nums.length) {
        // Check if the current element is equal to the previous one.
        if (nums[i] === nums[j]) {
            j++;  // Move to the next element.
            c++;  // Increment the counter for consecutive equal elements.
        } else {
            // If the count is greater than 2, remove the excess duplicates.
            if (c > 2) {
                nums.splice(i + 2, c - 2);
                j = i + 2; // Move the pointer to the next unique element after removal.
            }

            // Reset pointers and counter for the next set of consecutive elements.
            i = j;
            j++;
            c = 1;
        }
    }

    // Remove excess duplicates for the last set of consecutive elements.
    if (c > 2) {
        nums.splice(i + 2, c - 2);
    }

    // Return the length of the modified array.
    return nums.length;
}
