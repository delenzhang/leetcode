/** ((((()
 * @param {string} s
 * @return {number}
 */
// 暴力解法
var longestValidParentheses1 = function(s) {
    let start = 0,  l = s.length, next = l - 1, max = 0;
    if (l == 0 || l == 1) return max
    while (true) {
        if (start >= l -1) return max
        if (s[start] == ')') {
             ++start
            next = l -1
            continue
        }
        if (next - start <= max) {
            start++
            next = l - 1
            continue
        }
        if(isValid(s, start, next)) {
            if ((next-start + 1) > max) {
                max = next -start + 1
            }
        }
        --next
        if (next <= start) {
            ++start
            next = start + 1
        }
    }
    function isValid(s, start, end) {
        let i = start
        num = 0
        while (i <= end) {
            if (s[i] == '(') {
                ++num;
            } else {
                --num
            }
            i++
            if (num < 0) return false
        }
        if (num == 0) return true
    }

    return max;

};

/**
 * 0123456789 10
 * 020002480
 * ()((()))() (
 * @param s
 * @returns {number}
 */
var longestValidParentheses = function(s) {
    let  l = s.length, max = 0;
    if (l == 0 || l == 1) return max
    let dp = new Array(l).fill(0)
    for(let i = 1; i < l; i++) {
        if (s[i] == ')') {
            if (s[i-1] == '(') {
                 dp[i] = (dp[i-2] || 0) + 2
            } else if (s[i-1] == ')') {
                // ((())
                // 01234
                // 0002
                let preIndex = i - dp[i-1] -1
                if (s[preIndex] == '(') {
                   dp[i] = dp[i-1] + (dp[i-dp[i-1]-2] || 0) + 2
                }
            }
        }
        max = Math.max(dp[i], max)
    }
    console.log(dp)
    return max

};
console.log(longestValidParentheses("()((()))()("))