/**
 * 
 * 461. Hamming Distance
 * -------------------------------
 * 
 * 
 * Calculates the Hamming Distance between two integers.
 * 
 * @param {number} x - The first integer
 * @param {number} y - The second integer
 * @returns {number} - The Hamming Distance between x and y
 */
function hammingDistance(x, y) {
    // Calculate the bitwise XOR of x and y
    let xorResult = x ^ y;
    
    // Variable to store the Hamming Distance
    let distance = 0;

    // Iterate through the bits of xorResult
    while (xorResult > 0) {
        // Check the least significant bit and increment distance if the bit is set
        distance += xorResult & 1;

        // Right-shift xorResult by 1 to move to the next bit
        xorResult >>= 1;
    }

    // Return the calculated Hamming Distance
    return distance;
}

// Example usage:
const result = hammingDistance(7, 10);
console.log(result); // Output: 3


/**
 * 
 * Solution in C
 * ----------------------
 * 
 * 
 * int hammingDistance(int x, int y) {
    int xor_result = x ^ y;
    int distance = 0;
    while (xor_result > 0) {
        distance += xor_result & 1;
        xor_result >>= 1;
    }
    return distance;
}
 * 
 */