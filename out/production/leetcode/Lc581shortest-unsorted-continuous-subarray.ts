/**
 * [2,3,4, 6, 8,7,6 5,8,10,9,15]
 * // 后面有序
 * 11 9 8
 *
 * // 前面有序
 *  0 1 2 3 4
 *  0 1 2 3 5
 *  0 1 2 7
 *  0 1 2 7 8 9
 *  0 1 2 7 8 10
 *  0 1 2 7 8 10 11
 *  [0, 1 ,2 ,3]
 *  0 1 2 3
 *  [3, 2, 1, 0]
 *  0
 *  [5 4 3 2 1 0 6 7 8 9]
 *  9 8 7 6 0
 *
 * @param nums
 */

function findUnsortedSubarray(nums: number[]): number {
    let start= 0,  l = nums.length, end = l-1, stack = []
    if (l == 1) {
        return  0
    }
    for(let m = 0; m < l; m++) {
        if (stack.length == 0 || nums[m] > nums[stack[stack.length -1]]) {
            stack.push(m)
            continue
        }
        while (stack.length > 0 && nums[m] < nums[stack[stack.length -1]]) {
            stack.pop()
        }
        if(stack.length == 0) break
        stack.push(m)
    }
    if (stack.length == l) return 0
    if (stack.length == 1) return l
    if (stack.length == 0) {
        start = 0
    } else {
       for (let i = 0; i < stack.length-1; i++) {
            if (stack[i+1] != stack[i] + 1) {
                start = stack[i] + 1
                break
            }
        }
    }

    stack = []
    for(let m = l - 1; m >= 0; m--) {
        if (stack.length == 0 || nums[m] < nums[stack[stack.length -1]]) {
            stack.push(m)
            continue
        }
        while (stack.length > 0 &&nums[m] > nums[stack[stack.length -1]]) {
            stack.pop()
        }
        if(stack.length == 0) break
        stack.push(m)
    }
    if (stack.length == l) return l
    if (stack.length == 1) return 0

    if (stack.length == 0) {
        end = l-1
    } else {
        for (let i = 0; i < stack.length-1; i++) {
            if (stack[i+1] != stack[i] - 1) {
                end = stack[i] - 1
                break
            }
        }
    }
    return end - start + 1
};

console.log(findUnsortedSubarray([5,4 , 3, 2, 1, 0, 6, 7, 8, 9])) //6
console.log(findUnsortedSubarray([2,6,4,8,10,9,15])) // 5
console.log(findUnsortedSubarray([1, ,2 ,3 ,4])) // 0

console.log(findUnsortedSubarray([3, 3, 2 ,1 ,0])) //5
console.log(findUnsortedSubarray([3, 1,2 ,3 ,4])) //3
console.log(findUnsortedSubarray([2,1,1,1,1])) // 5