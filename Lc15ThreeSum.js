var threeSum = function(nums) {
    nums = nums.sort((a,b) => a-b);
    let l = nums.length
    let res = [];
    for(let i = 0; i< l-2; i++) {
        for(let j = i+1; j< l-1; j++) {
            let num = 0 - (nums[i] + nums[j]);
            let start = j + 1, end = l-1;
            while (start <= end) {
                mid = (start + end) >> 1;
                console.log(nums[mid], num, mid, start, end)
                if (nums[mid] == num) {
                    res.push([nums[i], nums[j], nums[mid]])
                    break
                } else if(nums[mid] > num) {
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            }
            while (nums[j] == nums[j+1] && j < l -1) {
               j++
            }
        }
        while (nums[i] == nums[i+1] && i < l -2) {
            i++
        }
    }
    console.log(res)
    return res;
};
threeSum([0,-1,-1,-1,-1,1,2,3])