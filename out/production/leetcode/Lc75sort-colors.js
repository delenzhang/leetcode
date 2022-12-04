/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 111222000222
 */
var sortColors = function(nums) {
    let n = nums.length;
    let p0 = 0, p2 = n - 1;
    for(let i = 0; i <= p2; i++) {
        while (nums[p2]== 2) {
            --p2
        }

        if (nums[i] == 2 && i < p2) {
            let temp = nums[i]
            nums[i] = nums[p2]
            nums[p2] = temp
            --p2
        }
        while (nums[p0] === 0) {
            p0++
        }
        if (nums[i] ==0  && i > p0) {
            let temp = nums[i]
            nums[i] = nums[p0]
            nums[p0] = temp
            ++p0
        }
    }
};
sortColors([1,0,0,0])
