function maxSlidingWindow(nums: number[], k: number): number[] {
    let res = [], l = nums.length, stack = []
    for(let i = 0; i < k; i++) {
        if (i < l){
            while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
                stack.pop()
            }
            stack.push(i)
        }
    }
    let i = 0, j = k-1
    res.push(nums[stack[0]])
    while((j+1)<l){
        j = j+1
        i = i+1
        if (stack[0] < i) {
            stack.shift()
        }
        while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[j]) {
                stack.pop()
            }
            stack.push(j)
        res.push(nums[stack[0]])
    }
    console.log(res)
    return res
};
/***
 * 1,3,-1,-2,-1,0,2
 * 1 3 3
 * 3 3
 */

maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)
maxSlidingWindow([1], 1)
maxSlidingWindow([1,-1], 1)