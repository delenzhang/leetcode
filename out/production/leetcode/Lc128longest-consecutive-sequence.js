/**
 * @param {number[]} nums
 * @return {number}
 * [0,3,7,2,5,8,4,6,0,1]
 *  0 1
 *
 */
var longestConsecutive = function(nums) {
    let l = nums.length
    let set = new Set(nums)
    let max = 0 // 以当前数字结尾的dp
    for(let num of set) {
        let preNum = num - 1
        if (!set.has(preNum)) {
            let start = num, cout = 1;
           while (true) {
                ++start;
                if (set.has(start)) {
                    cout++
                } else {
                    break
                }
            }
            max =  Math.max(max, cout)
        }
    }
    console.log(max)
    return max
};

longestConsecutive([0,3,7,2,5,8,4,6,0,1])