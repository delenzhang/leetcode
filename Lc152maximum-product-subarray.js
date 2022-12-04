/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let l = nums.length
    if (l == 0) return 0
    if (l == 1) return nums[0]
    let i = 0, max = Number.MIN_SAFE_INTEGER
    for (let index = 0; index < l; index++) {
        max = Math.max(max, nums[index])
    }
    while (i < l) {
        let j = i + 1
        let product = nums[i]
        while (j < l) {
            product = product * nums[j]
            max = Math.max(max, product)
            j++
        }
        i++
    }
    console.log(max)
    return max
};

maxProduct([2,3,-2,4])