// @ts-ignore
function findAnagrams(s, p) {
    let sl = s.length, pl = p.length;
    if (sl < pl)
        return [];
    let pCharArr = new Array(26).fill(0);
    let sCharArr = new Array(26).fill(0);
    for (let char of p) {
        let index = char.charCodeAt(0) - 'a'.charCodeAt(0);
        ++pCharArr[index];
    }
    for (let j = 0; j < pl; j++) {
        let index = s[j].charCodeAt(0) - 'a'.charCodeAt(0);
        ++sCharArr[index];
    }
    let i = 1, res = [];
    if (pCharArr.join('') == sCharArr.join('')) {
        res.push(0);
    }
    while (i < (sl - pl) + 1) {
        let index = s[i - 1].charCodeAt(0) - 'a'.charCodeAt(0);
        --sCharArr[index];
        let _index = s[i + pl - 1].charCodeAt(0) - 'a'.charCodeAt(0);
        ++sCharArr[_index];
        if (pCharArr.join('') == sCharArr.join('')) {
            res.push(i);
        }
        ++i;
    }
    console.log(res);
    return res;
}
;
findAnagrams("abab", "ab");
findAnagrams("cbaebabacd", "abc");
//# sourceMappingURL=Lc438find-all-anagrams-in-a-string.js.map