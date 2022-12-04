
/**
 * [1,2, 1000, -999]  0
 * @param nums
 * @param k
 */
// @ts-ignore
function subarraySum(nums: number[], k: number): number {
    let l = nums.length, num = 0
    let map = new Map(), pre = 0
    map.set(0, 1)
    for(let i = 0; i< l; i++) {
        pre += nums[i]

        if (map.has(pre - k)) {
            let _num = map.get(pre-k)
            num +=_num
        }
        map.set(pre, (map.get(pre) || 0) +1)
    }
    console.log(num, map)
    return num

};

subarraySum([1,1,1], 2) //2
subarraySum([1,2,3], 3) //2
subarraySum([1], 0) //0
subarraySum([1, -1, 0], 0) //3