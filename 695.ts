/**
 * 
 * 695. Max Area of Island
 * --------------------------------
 * 
 * 
 * Calculates the maximum area of an island in a 2D grid.
 * 
 * @param {number[][]} grid - The 2D grid representing the island
 * @returns {number} - The maximum area of the island
 */
function maxAreaOfIsland(grid: number[][]): number {
    // Initialize the variable to store the maximum area
    let maxArea = 0;

    // Define a recursive function to count the area of an island
    const count = (i: number, j: number): number => {
        // Base case: If the current cell is out of bounds or not part of the island, return 0
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] !== 1) {
            return 0;
        }

        // Mark the current cell as visited (set its value to 0)
        grid[i][j] = 0;

        // Recursively calculate the area by counting connected cells
        return (
            1 +
            count(i + 1, j) +
            count(i - 1, j) +
            count(i, j + 1) +
            count(i, j - 1)
        );
    };

    // Iterate through each cell in the grid
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            // If the cell is part of an island (has a value of 1), calculate its area
            if (grid[i][j] === 1) {
                const area = count(i, j);
                // Update the maximum area if the current island's area is greater
                maxArea = Math.max(maxArea, area);
            }
        }
    }

    // Return the maximum area of the island
    return maxArea;
}
