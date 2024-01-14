// Problem number- 496 -Next Greater Element I


/**
 * Given two arrays nums1 and nums2, where nums1 is a subset of nums2, 
 * find the next greater element for each element in nums1 in the corresponding
 * positions in nums2.
 * 
 * @param nums1 Subset array
 * @param nums2 Full array
 * @returns Array containing the next greater element for each element in nums1
 */
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    // Create an object to store the mapping of elements to their next greater elements
    const obj: { [key: number]: number } = {};

    // Iterate over nums2 to find the next greater element for each element
    for (let i = 0; i < nums2.length; i++) {
        for (let j = i + 1; j < nums2.length; j++) {
            // If a greater element is found, store the mapping and break the loop
            if (nums2[j] > nums2[i]) {
                obj[nums2[i]] = nums2[j];
                break;
            }
        }
    }

    // Create an array to store the result
    const res: number[] = [];

    // Iterate over nums1 to get the next greater element from the mapping
    for (let i = 0; i < nums1.length; i++) {
        // If the element has a next greater element, push it to the result array
        if (obj[nums1[i]]) {
            res.push(obj[nums1[i]]);
        } else {
            // If no greater element is found, push -1 to the result array
            res.push(-1);
        }
    }

    // Return the final result array
    return res;
}

// Example usage:
const nums1 = [4, 1, 2];
const nums2 = [1, 3, 4, 2];
const result = nextGreaterElement(nums1, nums2);
console.log(result);
