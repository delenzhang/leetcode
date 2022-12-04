/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 *   3,2,1,5,6,4
 *   1 2 3 5 6 4
 *   1 2 3 5 4 6
 *   1 2 3 4 5 6
 */
var findKthLargest = function(nums, k) {
    let l = nums.length
    function quickSort(l, r, sk) {
        if (l == r) return nums[l]
        if (Math.random() > 0.5) {
            swap(l, r)
        }
        let pivot = nums[l], i = l+1, j = r
        while (i <= j) {
            while (nums[i] < pivot) {
                i++
            }
            while (nums[j] > pivot) {
                j--
            }
            if (i < j) {
                swap(i, j)
                --j
            }
             ++i
        }
        swap(l, j)
        if (j == sk) {
            return  nums[j]
        } else if (j < sk) {
            return quickSort(j+1, r, sk)
        } else {
            return quickSort(l, j-1, sk)
        }
    }
    function swap(i, j) {
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }
    return quickSort(0, l-1, l - k)
};

console.log(findKthLargest([99, 99], 1))