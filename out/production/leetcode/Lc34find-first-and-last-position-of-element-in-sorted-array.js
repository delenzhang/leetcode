/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let i = 0, j = nums.length - 1, res = [-1, -1]
    if (nums.length == 0) return res
    if (nums.length == 1) {
        if (nums[0] === target) {
            return [0, 0]
        } else {
            return res
        }
    }

    while (i <= j) {
        let mid = Math.floor((i+j) /2)
        if (nums[mid] == target) {
            if (mid === nums.length -1) {
                res[1] = mid
                break
            }
            if ( nums[mid + 1] > target) {
               res[1] = mid
               break
            } else {
                i = mid + 1
            }

        }
        if (nums[mid] > target) {
            j = mid -1
        }
        if (nums[mid] < target) {
            i = mid+1
        }
    }
    i = 0, j = nums.length -1
    while (i <= j) {
        let mid = Math.floor((i+j) /2)
        console.log(i, j, mid)
        if (nums[mid] == target) {
            if (mid < 1) {
                res[0] = 0
                break
            } else  if ( nums[mid - 1] < target) {
               res[0] = mid
               break
            } else {
                j = mid - 1
            }
        }
        if (nums[mid] > target) {
            j = mid -1
        }
        if (nums[mid] < target) {
            i = mid+1
        }
    }
    console.log(res)
    return res
};

searchRange([7,7], 7)