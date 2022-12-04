/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let l = nums.length
    let dp = new Array(l).fill(1),  max = 1

    for(let i = 1; i < l; i++) {
        let next = 1
        for(let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                next = Math.max(dp[j] + 1, next)
            }
        }
        dp[i] = next
        max = Math.max(dp[i], max)
    }
    console.log(dp, max)
    return max
};

lengthOfLIS([1,3,6,7,9,4,10,5,6])