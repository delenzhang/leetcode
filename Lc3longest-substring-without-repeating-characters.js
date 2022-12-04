/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l = s.length
    let i = 0, map = {}, max = 0
    // abcbcd
    for (let j = 0; j < l; j++) {
        let pre = map[s[j]]
        if(pre >= i) {
            i = map[s[j]] + 1
        }
        max = Math.max(max, j-i+1)
        map[s[j]] = j
    }
    // console.log(max)
    return  max
}

lengthOfLongestSubstring("aaaaaaa")