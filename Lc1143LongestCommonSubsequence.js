/**
 * @param {string} text1
 * @param {string} text2
 *
 * text1 = "abcde", text2 = "ace"
 *    0  a b c d e
 * 0  0  0 0 0 0 0
 * a  0  1 1 1
 * c  0  1 1 2
 * e  0
 * @return {number}
 */

var longestCommonSubsequence = function(text1, text2) {
   let l1 = text1.length, l2 = text2.length, dp = [];
   for(let i = 0; i <= l2; i++) {
       dp[i] = []
       for(let j = 0; j <= l1; j++) {
           dp[i][j] = -1
       }
   }
   for(let i = 0; i <= l2; i++) {
       dp[i][0] = 0
   }
   for (let j = 0; j <= l1; j++) {
       dp[0][j] = 0
   }
   for(let i = 1; i <= l2; i++) {
       for(let j = 1; j<=l1; j++) {
           let upper = 0
           if (text1[j-1] == text2[i-1]) {
                upper = 1
           }
           dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]+upper)
       }
   }
   return dp[l2][l1]
};
console.log(longestCommonSubsequence("abcde", "aec"))