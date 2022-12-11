function removeElement(nums: number[], val: number): number {
    let l = nums.length, i = 0, j = l-1, num = 0
    if (l == 0) return 0
    if (l == 1) {
        if(nums[0]== val) {
            nums = []
            return 1
        }
    }
    let res = l - num
    for(let k = 0; k < l ;k++) {
        if (nums[k] == val) {
            ++num
        }
    }

    while(i < j) {
        while (nums[i] != val) {
            i++
        }
        while(nums[j] == val) {
            j--
        }

        let temp = nums[j]
        nums[j] = nums[i]
        nums[i] = temp
        ++i
        --j
    }
    return res
};

removeElement([3,2,2,3],3)