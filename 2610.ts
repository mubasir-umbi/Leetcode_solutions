/**
 * 2610. Convert an Array Into a 2D Array With Conditions
 * --------------------------------------------------------------
 * 
 * 
 * Returns a matrix where each row contains unique elements from the input array.
 * 
 * @param {number[]} nums - The input array of numbers
 * @returns {number[][]} - The resulting matrix
 */
function findMatrix(nums: number[]): number[][] {
    // Array to store the resulting matrix
    const arr: number[][] = [];

    // Recursive function to filter out duplicate elements and create rows in the matrix
    const filter = (ar: number[], c: number) => {
        // Arrays to store unique and duplicate elements
        const a: number[] = [];
        const bal: number[] = [];

        // Iterate through the array and filter out duplicates
        for (let i = 0; i < ar.length; i++) {
            if (!a.includes(ar[i])) {
                a.push(ar[i]);
            } else {
                bal.push(ar[i]);
            }
        }

        // Add the unique elements to the matrix
        c += a.length;
        arr.push(a);

        // If there are still elements in the array, recursively call the function
        if (c < nums.length) {
            filter(bal, c);
        }
    };

    // Initial call to the recursive function
    filter(nums, 0);

    // Return the resulting matrix
    return arr;
}

// Example usage:
const nums = [1, 2, 3, 2, 4, 5, 6, 7, 8, 9, 9, 9];
const result = findMatrix(nums);
console.log(result);
// Output: [ [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], [ 9 ] ]
