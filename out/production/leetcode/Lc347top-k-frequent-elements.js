/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let l = nums.length, temp = new Map()
    for (let i = 0; i < l ; i++) {
        if (temp.has(nums[i])) {
            const num = temp.get(nums[i])
            temp.set(nums[i], num+1)
        } else {
            temp.set(nums[i], 1)
        }
    }
    let sortNums = Array.from( temp.keys()).map(item => [item, temp.get(item)])
    sortNums.sort((a, b) => b[1] - a[1])
    let res = []
    for (let i = 0; i < k; i++) {
        res[i] = sortNums[i][0]
    }
    console.log(res)
    return res
};

topKFrequent([1,1,1,2,2,3], 1)