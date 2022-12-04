/**
 *       0 a b c d e f g
 *
 *   * 1
 *   a 1
 *   * 0
 *   a 0
 *   g 0
 *
 *
 *
 * @param {string} s abcdefe
 * @param {string} p a.*gg
 *
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let sl = s.length, pl = p.length;
  let dp = new Array(pl+1).fill(0).map(item => (new Array(sl+1).fill(0 )));
  dp[0][0] = 1
  for (let i = 1; i <= pl; i++) {
    if(p[i-1] == '*') {
      dp[i][0] = dp[i-2][0]
    }
  }
  for(let i = 1; i <= pl; i++) {
    for (let j = 1; j<= sl; j++) {
      if (p[i-1] == s[j-1] || p[i-1] == '.') {
        dp[i][j] = dp[i-1][j-1]
      } else if(p[i-1] == '*') {
        // * 前面字符 和 s末尾字符相同
        if (p[i-2] == s[j-1] || p[i-2] == '.') {
          //  重复0 / >= 1
          dp[i][j] = dp[i-2][j] || dp[i][j-1]
        } else {
          dp[i][j] = dp[i-2][j]
        }
      }
    }
  }
  return dp[pl][sl]
};
// isMatch = (s, p) => {
//   if (s == null || p == null) return false;
//
//   const sLen = s.length, pLen = p.length;
//
//   const dp = new Array(sLen + 1);
//   for (let i = 0; i < dp.length; i++) {
//     dp[i] = new Array(pLen + 1).fill(false); // 将项默认为false
//   }
//   // base case
//   dp[0][0] = true;
//   for (let j = 1; j < pLen + 1; j++) {
//     if (p[j - 1] == "*") dp[0][j] = dp[0][j - 2];
//   }
//   // 迭代
//   for (let i = 1; i < sLen + 1; i++) {
//     for (let j = 1; j < pLen + 1; j++) {
//
//       if (s[i - 1] == p[j - 1] || p[j - 1] == ".") {
//         dp[i][j] = dp[i - 1][j - 1];
//       } else if (p[j - 1] == "*") {
//         if (s[i - 1] == p[j - 2] || p[j - 2] == ".") {
//           dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j];
//         } else {
//           dp[i][j] = dp[i][j - 2];
//         }
//       }
//     }
//   }
//   console.log(dp)
//   return dp[sLen][pLen]; // 长sLen的s串 是否匹配 长pLen的p串
// };

console.log(isMatch("mississippi", "mis*is*ip*."))