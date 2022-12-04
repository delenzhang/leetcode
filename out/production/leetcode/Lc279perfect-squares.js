/**
 * @param {number} n
 * @return {number}
 *  dp[n]
 */
var numSquares = function(n) {
    let max = Math.floor(Math.pow(n, 0.5))
    console.log(max)
    let dp = new Array(n+1).fill(0)
    dp[0] = 0
    dp[1] = 1
    if (n < 2) {
        return dp[n]
    }
    for(let i = 2; i <=n; i++) {
        let min = dp[i-1] + 1
        for(let j = 1; j <= max; j++) {
            let jDouble = Math.pow(j, 2)
            if(i > jDouble) {
                min = Math.min(min, dp[i - jDouble] + 1)
            } else if (i == jDouble) {
                min = 1
            }
        }
        dp[i] = min
    }
    console.log(dp)
    return dp[n]
};

numSquares(13)