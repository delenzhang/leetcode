
/**
 *
 * 1 -   +
 *  - + - +
 * @param nums
 * @param target
 */
// @ts-ignore
function findTargetSumWays(nums: number[], target: number): number {
    let l = nums.length
    return back_trace(0, target)
    function back_trace(i, target) {
        let count = 0
        if (nums.length -1 == i) {
            if ((target + nums[i]) == 0) {
                ++count
            }
            if ((target -nums[i]) == 0) {
                ++count
            }
            return count
        }
        count += back_trace(i+1, target - nums[i])
        count += back_trace(i+1, target + nums[i])
        return  count
    }
};


console.log(findTargetSumWays([1,1,1,1,1], 3))
console.log(findTargetSumWays([1], 1))
console.log(findTargetSumWays([1, 0], 1))