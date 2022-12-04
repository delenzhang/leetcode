/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left_max = 0, right_max = 0, sum = 0
    let left = 1, right = height.length - 2
    while (left <= right) {
        left_max = Math.max(left_max, height[left-1])
        right_max = Math.max(right_max, height[right+1])
        if (left_max < right_max) {
            if (height[left] < left_max) {
                sum += (left_max - height[left])
            }
            left++
        } else {
            if (height[right] < right_max) {
                sum += (right_max - height[right])
            }
            right--
        }
    }
    console.log(sum)
    return  sum
};

trap([4,2,0,3,2,5])