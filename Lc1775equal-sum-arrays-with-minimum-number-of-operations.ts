function minOperations(nums1: number[], nums2: number[]): number {
   let l1 = nums1.length, l2 = nums2.length
    let min1 = l1, max1 = l1*6, min2 = l2, max2 = l2 * 6
    let sum1 = nums1.reduce((pre, cur) => pre + cur, 0)
    let sum2 = nums2.reduce((pre, cur) => pre + cur, 0)
    if (sum1 === sum2) {
        return 0
    }
    if(min2 > max1 || min1 > max2) {
        return -1
    }
    let diff = Math.abs(sum1 - sum2)
    if (sum1 > sum2) {
        return getResult(nums1, nums2, diff)
    }
    return getResult(nums2, nums1, diff)

    function getResult(bigs, smalls, diff) {
        let cnt = new Array(6).fill(0)
        for(let x of bigs) {
            ++cnt[x-1]
        }
        for (let x of smalls) {
            ++cnt[6-x]
        }
        let res = 0, d = diff
        for(let i = cnt.length - 1; i >0; i--) {
            if (i*cnt[i] >= d) {
                return res+ Math.ceil(d/i)
            }
            d -= (i * cnt[i])
            res += cnt[i]
        }
        console.log(res)
        return res
    }

};
// console.log(minOperations([1,2,3,4,5,6], [1,1,2,2,2,2])) // 3
// console.log(minOperations([1,1,1,1,1,1,1], [6]))
// console.log(minOperations([1], [6, 6]))
console.log(minOperations([5,6,4,3,1,2], [6,3,3,1,4,5,3,4,1,3,4]))