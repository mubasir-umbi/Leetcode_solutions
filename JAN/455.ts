/**
 * 455. Assign Cookies
 * -----------------------------
 * 
 * 
 * Finds the maximum number of children that can be content with the available cookies.
 * 
 * @param {number[]} g - The array representing the greed factor of children
 * @param {number[]} s - The array representing the sizes of cookies
 * @returns {number} - The maximum number of content children
 */
function findContentChildren(g: number[], s: number[]): number {
    // Sort the arrays in ascending order
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    // Variables to track indices and the count of content children
    let gr = 0, ck = 0, c = 0;

    // Iterate through both arrays
    while (gr < g.length && ck < s.length) {
        // If the size of the current cookie is sufficient for the current child's greed factor
        if (s[ck] >= g[gr]) {
            c++; // Increment the count of content children
            gr++; // Move to the next child
        }
        ck++; // Move to the next cookie
    }

    // Return the maximum number of content children
    return c;
}

// Example usage:
const greedFactors = [1, 2, 3];
const cookieSizes = [1, 1];
const result = findContentChildren(greedFactors, cookieSizes);
console.log(result); // Output: 1

