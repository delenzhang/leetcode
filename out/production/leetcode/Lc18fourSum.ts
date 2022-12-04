// @ts-ignore
function fourSum(nums: number[], target: number): number[][] {
    nums.sort((a,b) => a-b)
    let l = nums.length, res = []
    for(let i = 0; i < l-3; i++) {
        if (i > 0 && nums[i] == nums[i-1]) {
            continue
        }
        for(let j = i+1; j < l-2; j++) {
            if (j > i+1 && nums[j] == nums[j-1]) {
                continue
            }
            let m = j+1, n = l-1, twoSum = nums[i] + nums[j]
            while (m < n) {
                if ((twoSum + nums[m] + nums[n]) === target) {
                    res.push([nums[i],nums[j],nums[m] ,nums[n]])
                    while (nums[m+1] == nums[m]) {
                        ++m
                    }
                    ++m
                } else if ((nums[m] + nums[n]) > (target - twoSum)) {
                    n--
                } else {
                    m++
                }
            }
        }
    }
    console.log(res)
    return res
};

fourSum([1,0,-1,0,-2,2,1,1,1], 2)