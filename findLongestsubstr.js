/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l = s.length
    if (l == 0) return 0
    if (l == 1) return 1
    if (l == 2 ) {
        if (s[0] == s[1]) {
            return 1
        }
        return 2
    }
    let i = 0, j = 1, max = 1
    while (i < j && j < l) {
        let isSameIndex = -1
        for(let k = i; k <j; k++) {
            if (s[k] == s[j]) {
                isSameIndex = k
                break
            }
        }
        console.log(isSameIndex, max, i, j)
        if (isSameIndex  == -1) {
            max = Math.max(max, j-i+1)
            ++j
        } else {
            i = isSameIndex+1
            if (j == i) {
                j = i+1
            }
        }

    }
    return max
};

console.log(lengthOfLongestSubstring("pwwkew"))