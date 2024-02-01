// 2966. Divide Array Into Arrays With Max Difference

function divideArray(nums: number[], k: number): number[][] {
    let n = nums.length;

    // If the array has less than 3 elements, there is no valid triplet
    if (n < 3) return [];

    nums.sort((a: number, b: number) => a - b);

    let res: any = [];

    // Initialize an index variable
    let i = 0;

    // Iterate through the array
    while (i < n) {
        // Check if there are at least two more elements and their difference is less than or equal to k
        if (i + 2 < n && nums[i + 2] - nums[i] <= k) {
            // If the condition is met, push a triplet to the result array
            res.push([nums[i], nums[i + 1], nums[i + 2]]);
        } else {
            // If the condition is not met, there is no valid triplet, return an empty array
            return [];
        }

        // Move to the next triplet (skipping to the next index after the current triplet)
        i += 3;
    }

    return res;
}
