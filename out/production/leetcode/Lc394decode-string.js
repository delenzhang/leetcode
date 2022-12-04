// @ts-ignore
function decodeString(s) {
    let l = s.length, res = '', stack = [];
    if (l <= 3)
        return s;
    let i = 0, numLen = 0;
    while (true) {
        if (s[i] === '[') {
            stack.push(numLen);
            numLen = 0;
            stack.push(i++);
        }
        else if (s[i] === ']') {
            let left = stack.pop();
            let numLen = stack.pop();
            let num = parseInt(s.substr(left - numLen, numLen));
            let subStr = s.substring(left + 1, i);
            let decodedStr = getStr(subStr, num);
            s = s.substring(0, Math.max(0, left - numLen)) + decodedStr + s.substring(i + 1);
            i = left - numLen + subStr.length * num;
        }
        else if (!isNaN(parseInt(s[i]))) {
            numLen++;
            i++;
        }
        else {
            i++;
        }
        if (i >= s.length) {
            break;
        }
    }
    console.log(s);
    return s;
    function getStr(str, num) {
        let string = '';
        for (let i = 0; i < num; i++) {
            string += str;
        }
        return string;
    }
}
;
console.assert(decodeString("3[a]12[bc]") == "aaabcbc");
console.assert(decodeString("3[a]2[bc]") == "aaabcbc");
console.assert(decodeString("3[a2[c]]") == "accaccacc");
console.assert(decodeString("2[abc]3[cd]ef") == "abcabccdcdcdef");
console.assert(decodeString("abc3[cd]xyz") == "abccdcdcdxyz");
decodeString("100[leetcode]");
//# sourceMappingURL=Lc394decode-string.js.map