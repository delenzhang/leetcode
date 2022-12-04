/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canPartition = function(nums) {
//     if(nums.length < 2) return false
//     let sum = nums.reduce((pre, cur) => {
//         return pre + cur
//     } ,0)
//
//     if (sum & 1 === 1) {
//         return  false
//     }
//     let _target = sum / 2
//
//     return findTarget(nums, _target)
//
//     function findTarget(arr, target) {
//         let l = arr.length
//         for (let i = 0; i < l; i++) {
//             if (arr[i] === target) {
//                 return true
//             } else if (arr[i] < target) {
//                 let num = arr[i]
//                 let newArr = arr.slice(0, i).concat(arr.slice(i+1, l))
//                 let res = findTarget(newArr, target - num)
//                 if (res) {
//                     return true
//                 }
//             }
//         }
//         return false
//     }
//  };
var canPartition = function(nums) {
    let l = nums.length
    if(nums.length < 2) return false
    let sum = nums.reduce((pre, cur) => {
        return pre + cur
    } ,0)

    if (sum & 1 === 1) {
        return  false
    }
    let _target = sum / 2
    let dp = new Array(l+1).fill(0).map(item => new Array(_target + 1).fill(false))
    for(let i = 0; i <= l; i++) {
        dp[i][0] = true
    }

    for(let i = 1; i <= l; i++) {
        for(let j = 1; j <= _target; j++) {
            dp[i][j] = !!(dp[i-1][j] || (dp[i-1][j-nums[i-1]]))
        }
    }
    return dp[l][_target]

 };

// console.log(canPartition([1,2,3,4,5,6,7])) // true
// console.log(canPartition([14,9,8,4,3,2])) // true
// console.log(canPartition([1,2,3,5])) // false
console.log(canPartition([1,2,5]))