/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * 1 1 1 1
 * 1 1 1 1 1
 * 1 2
 * 1 3
 * 1
 */
var uniquePaths = function(m, n) {
    let dp = new Array(m+1).fill(0).map(item => new Array(n+1).fill(1))
    for(let i = 2; i <= m; i++) {
        for(let j=2; j <=n;j++) {
            dp[i][j] = dp[i][j-1] + dp[i-1][j]
        }
    }
    return  dp[m][n]
};

console.log(uniquePaths(1,1))