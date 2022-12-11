// @ts-ignore
function myAtoi(s: string): number {
    let numStr = [], l = s.length
    let numStrArr = new Array(10).fill(0).map((_, index) => String(index))
    let min = 0 - 2 **31, max = 2**31-1
    let set = new Set()
    set.add('+')
    set.add('-')
    for(let i = 0; i < l; i++) {
        if (numStrArr.indexOf(s[i]) < 0 && !set.has(s[i])) break
        if (s[i] == ' ') {
            continue
        }
        if (set.has(s[i]) && (i+1) < l && numStrArr.indexOf(s[i+1]) > -1) {
            numStr.push(s[i])
        } else if (numStrArr.indexOf(s[i]) > -1) {
            numStr.push(s[i])
        }
        if ((i+1) < l && numStrArr.indexOf(s[i+1]) < 0) {
            break
        }
    }
    console.log(numStr)
    let nl = numStr.length
    if (nl === 0) return 0
    let res = 0
    for(let i = 0; i < nl; i++) {
        if (set.has(numStr[nl - i -1])) {
            if (numStr[nl - i -1] == '-') {
                 res = 0 - res;
            }
        } else {
            res += numStr[nl - i -1] * (10**i)
        }
    }
    if (res < min) return min
    if (res > max) return max
    return res
};

console.log(myAtoi("words and 987"))
console.log(myAtoi("   +4193 with words"))
console.log(myAtoi("   -42"))
console.log(myAtoi("42"))
console.log(myAtoi(".1"))