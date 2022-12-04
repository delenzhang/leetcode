/**
 * 15 + 15 + 40 + 8
 * @param nums
 */
// @ts-ignore
function maxCoins(nums) {
    let l = nums.length, max = 0;
    if (nums.length == 1) {
        return nums[0];
    }
    let dp = new Array(l + 2).fill(0).map(item => new Array(l + 2).fill(0));
    nums.push(1);
    nums.unshift(1);
    // 1 ...l... 1
    //           l+1
    for (let i = l - 1; i >= 0; --i) {
        for (let j = i + 2; j <= l + 1; ++j) {
            for (let k = i + 1; k < j; k++) {
                dp[i][j] = Math.max(dp[i][j], dp[i][k] + dp[k][j] + (nums[i] || 1) * nums[k] * (nums[j] || 1));
            }
        }
    }
    console.log(dp, dp[0][l + 1]);
    return dp[0][l + 1];
}
;
// maxCoins([35,16,83,87,84,59,48,41,20,54]) //1849648
maxCoins([3, 1, 5, 8]); //167
//# sourceMappingURL=Lc312burst-balloons.js.map