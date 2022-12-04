
// @ts-ignore
function largestSumOfAverages(nums: number[], k: number): number {
    let l = nums.length, max = 0
    if (l == k) {
        return nums.reduce((pre,cur) => pre+cur, 0)
    }
    const prefix = new Array(l + 1).fill(0);
     let dp = new Array(l+1).fill(0).map(item => new Array(k+1).fill(0))
    for (let i = 0; i < l; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
        dp[i+1][1]= prefix[i + 1] / (i+1)
    }

    for(let m = 2; m<=k; m++) {
        for(let i = m; i <= l; i++) {
            for(let x= m-1; x < i;x++) {
                dp[i][m] = Math.max(dp[i][m], dp[x][m-1] + (prefix[i] - prefix[x]) / (i-x))
            }
        }
    }
    console.log(dp[l][k])
    return  dp[l][k]

}

largestSumOfAverages([9,1,2,3,9], 3) // 20

largestSumOfAverages([1,2,3,4,5,6,7], 4) // 20.5
largestSumOfAverages([4,1,7,5,6,2,3], 4) // 18.1666
largestSumOfAverages([4663,3020,7789,1627,9668,1356,4207,1133,8765,4649,205,6455,8864,3554,3916,5925,3995,4540,3487,5444,8259,8802,6777,7306,989,4958,2921,8155,4922,2469,6923,776,9777,1796,708,786,3158,7369,8715,2136,2510,3739,6411,7996,6211,8282,4805,236,1489,7698],27)
