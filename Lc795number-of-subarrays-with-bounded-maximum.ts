// @ts-ignore
// 2 2 25 256 5 56 6
// @ts-ignore
// 2 2 25 256 5 56 6
// 2,9,2,5,6
function numSubarrayBoundedMax(nums: number[], left: number, right: number): number {
    let res = 0, last1 = -1, last2 = -1, l = nums.length

    for (let i = 0; i < l; i++) {
        if (checkOk(nums[i])) {
            last1 = i
        } else if (nums[i] > right) {
            last2 = i
            last1 = -1
        }
        if (last1 != -1) {
            res += (last1 - last2)
        }
    }
    console.log(res)
    return res

    return res
    function checkOk(num) {
        return num >= left && num <= right
    }
};

numSubarrayBoundedMax([2,9,1,5,6], 2, 8) // 7
// numSubarrayBoundedMax([2,1,4,3], 2, 3)
// numSubarrayBoundedMax([73,55,36,5,55,14,9,7,72,52],32,69)