/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [], l = nums.length
    function back_trace(path) {
        if (path.length == nums.length) {
            res.push(path)
            return
        }
        nums.forEach(item => {
            if (!path.includes(item)) {
                back_trace(path.concat([item]))
            }
        })
    }
    back_trace([])
    return res
};

console.log(permute([1,2,3]))