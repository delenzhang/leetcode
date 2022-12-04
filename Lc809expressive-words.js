// @ts-ignore
function expressiveWords(s, words) {
    let num = 0;
    for (let word of words) {
        if (compare(s, word)) {
            ++num;
        }
    }
    return num;
}
;
// @ts-ignore
function compare(s, word) {
    let sl = s.length, wl = word.length;
    let i = 0, j = 0;
    while (i < sl || j < wl) {
        let sCharLen = 1, sCharIndex = i;
        while (sCharIndex + 1 < sl && s[sCharIndex + 1] === s[i]) {
            ++sCharIndex;
            ++sCharLen;
        }
        let wCharLen = 1, wCharIndex = j;
        while (wCharIndex + 1 < wl && word[wCharIndex + 1] === word[j]) {
            ++wCharIndex;
            ++wCharLen;
        }
        if (s[i] == word[j] && sCharLen >= 3) {
            i = sCharIndex + 1;
            if (sCharLen < wCharLen) {
                j = j + sCharLen;
            }
            else {
                j = wCharIndex + 1;
            }
        }
        else if (s[i] == word[j] && sCharLen == wCharLen) {
            i = sCharIndex + 1;
            j = wCharIndex + 1;
        }
        else {
            return false;
        }
    }
    return true;
}
// console.log(compare("abcd", "abc"))
console.log(compare("aaa", "aaaa"));
console.log(compare("heeelllooo", "hellllo"));
// console.log(expressiveWords("heeellooo", ["hello", "hi", "helo"]))
//# sourceMappingURL=Lc809expressive-words.js.map