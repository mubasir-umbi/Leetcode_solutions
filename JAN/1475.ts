//1475. Final Prices With a Special Discount in a Shop

/**
 * Calculate the final prices after applying discounts to a list of prices.
 * @param prices The array of prices before discounts.
 * @returns The array of final prices after applying discounts.
 */



function finalPrices(prices: number[]): number[] {
    // Initialize pointers i and j
    let i = 0, j = 1;

    // Result array to store final prices
    const res: number[] = [];

    // Iterate through the prices array
    while (i < prices.length) {
        // Check if the price at index j is less than or equal to the price at index i
        if (prices[j] <= prices[i]) {
            // Apply discount and push the result to the result array
            res.push(prices[i] - prices[j]);

            // Move to the next pair of prices
            i++;
            j = i + 1;
        } else {
            // If price at index j is not less than or equal to the price at index i
            if (j < prices.length) {
                // Move to the next index j
                j++;
            } else {
                // If j is out of bounds, push the price at index i to the result array
                res.push(prices[i]);

                // Move to the next pair of prices
                i++;
                j = i + 1;
            }
        }
    }

    // Return the array of final prices after applying discounts
    return res;
}
