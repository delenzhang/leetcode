/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}  [2345671]
 */
var search = function(nums, target) {
    let l = nums.length
    if (l == 0) {
        return -1
    }
    if (l == 1) {
        if (nums[0] === target) {
            return 0
        }
        return -1
    }
    function findTarget(nums, start, end) {
        while (start <= end) {
            let mid = parseInt((end + start) / 2)
            if (nums[mid] > target) {
                end = mid - 1
            } else if (nums[mid] < target) {
                start = mid + 1
            } else {
                return mid
            }
        }
        return -1
    }
    let i = 0, j = l-1, revertIndex = -1

    /**
     * 4 5 6 0 1 2 3
     * 6 0 1 2 3 4 5
     * 1 2 3 4 5 6 0
     */
    while (i < j) {
        if (nums[i] < nums[j]) {
            revertIndex = j
            break
        }
        if (j == i+1) {
            if (nums[i] > nums[j]) {
                revertIndex = i;
                break
            }
        }
        let mid = parseInt((i+j)/2);
        if (nums[i] > nums[mid]) {
            j = mid
        } else if (nums[mid] > nums[j]) {
            i = mid
        }
    }
    if (target >= nums[0] && target<= nums[revertIndex]) {
        return findTarget(nums, 0, revertIndex)
    } else if(revertIndex + 1 <= l-1 && target >= nums[revertIndex+1] && target <= nums[l-1]) {
        return findTarget(nums, revertIndex + 1, l-1)
    }
    return -1
};
console.log(search([6,0, 1, 2, 3, 4, 5], 3))
console.log(search([1, 2, 3, 4, 5, 0], 3))
console.log(search([0, 1, 2, 3, 4, 5], 3))
console.log(search([ 3, 4, 5, 0, 1, 2], 3))
// console.log(search([5,1,3,4], 1))
