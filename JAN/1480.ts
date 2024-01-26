//1480. Running Sum of 1d Array

function runningSum(nums: number[]): number[] {
    let sum = 0
    const res: number[] = []
    for(let i = 0; i < nums.length; i++){
        res.push(sum + nums[i])
        sum += nums[i]
    }
    return res
};