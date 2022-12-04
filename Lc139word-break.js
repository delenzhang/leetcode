/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    function match(s, words) {
        let sl= s.length, wl = 0
        for(let w of words) {
            wl += w.length
        }
        if (wl == sl) {
            return true
        }
        let result = false
        for (let i = 1; i <= sl -wl; i++) {
            let subStr = s.substring(wl, wl+i)
            if (wordDict.includes(subStr)) {
                result = result || match(s, words.concat([subStr]))
            }
        }
        return result
    }
    return match(s, [])
};
var wordBreak = function(s, wordDict) {
    let dp = new Array(s.length + 1).fill(false)
    dp[0] = true
    for(let i = 1; i <= s.length; i++) {
        let match =false
        for(let j = 0; j < i; j++) {
            let subs = s.substring(j, i)
            if (dp[j] && wordDict.includes(subs)) {
                match = true
            }
        }
        dp[i] = match
    }
    return dp[s.length]
};

console.log(wordBreak("applepenapple", ["apple", "pen"]))
// console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]))
console.log(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab"
,["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]))