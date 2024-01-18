/**
 * 70. Climbing Stairs
 * --------------------------
 * 
 * 
 * 
 * Function to calculate the number of distinct ways to climb stairs.
 * @param n - Number of stairs to climb.
 * @returns Number of distinct ways to climb the stairs.
 */
function climbStairs(n: number): number {
    // Base case: If there are 3 or fewer stairs, return the number of stairs.
    if (n <= 3) return n;

    // Recursive case: Calculate the number of ways by considering two steps back and three steps back.
    // The total number of ways is the sum of two steps back and three steps back, multiplied by 2.
    // This is because we can either take two single steps or one double step to reach the current step.
    return 2 * climbStairs(n - 2) + climbStairs(n - 3);
}



// Another method
//----------------------------------------

/**
 * Function to calculate the number of distinct ways to climb stairs.
 * @param n - Number of stairs to climb.
 * @returns Number of distinct ways to climb the stairs.
 */
function climbStairs2(n: number): number {
    // Initialize a Fibonacci-like sequence with the first two elements.
    const fib = [1, 2];
    
    // Initialize a variable to store the result.
    let res = 1;

    // Base case: If there are 2 or fewer stairs, return the number of stairs.
    if (n <= 2) {
        return n;
    }

    // Iterate from the third step up to the desired step 'n'.
    for (let i = 2; i < n; i++) {
        // Calculate the current element in the sequence by adding the two previous elements.
        res = fib[i - 1] + fib[i - 2];

        // Store the current element in the sequence.
        fib.push(res);
    }

    // Return the result, which represents the number of distinct ways to climb the stairs.
    return res;
}

