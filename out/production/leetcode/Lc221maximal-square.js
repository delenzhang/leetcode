/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let m = matrix.length, n = matrix[0].length, max = 0
    let dp = new Array(m).fill(0).map(item => new Array(n).fill(0))
    for(let i = 0; i < m; i++) {
        dp[i][0] = matrix[i][0] * 1
        max = Math.max(max, dp[i][0])
    }
    for(let j = 0; j < n; j++) {
        dp[0][j] = matrix[0][j] * 1
        max = Math.max(max, dp[0][j])
    }
    for(let i = 1; i< m; i++) {
        for(let j = 1; j < n; j++) {
            let colHasZero = false, rowHasZero = false
            for(let k = 0; k <= i; k++) {
                if (matrix[k][j] == 0) {
                    colHasZero = true
                    break
                }
            }
            for(let k = 0; k <= j; k++) {
                if (matrix[i][k] == 0) {
                    rowHasZero = true
                    break
                }
            }
            if (!colHasZero && !rowHasZero) {
                let _max = Math.max(dp[i-1][j-1] + 1, dp[i-1][j])
                dp[i][j] = Math.max(_max, dp[i][j-1])
            } else {
                dp[i][j] = dp[i-1][j-1]
            }
            max = Math.max(dp[i][j], max)
        }
    }
    console.log(max * max, dp, '<<<<<<<<<')
    return max * max
};


maximalSquare([["0","1"],["1","0"]])
maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]])
