// @ts-ignore
function removeInvalidParentheses(s: string): string[] {
   let l = s.length, map = new Map()
    let leftNum = 0, rightNum = 0
    for(let char of s) {
        if (char == '(') {
            ++leftNum
        } else if (char == ')') {
            ++rightNum
        }
    }
    if (checkStr(s)) {
        return [s]
    }
    let result = []
    for(let i = 1; i <= l; i++) {
        let k = i, res = new Set()
        res.add(s)
        while (k > 0) {
            res = getStrMultiOne(res)
            --k
        }
        res.forEach(item =>{
            if (checkStr(item)) {
                result.push(item)
            }
        })
        if (result.length > 0) {
            return result
        }
    }
    return  result

    function getStrMultiOne(set) {
        let res = new Set()
        set.forEach(str => {
            for (let i = 0; i< str.length; i++) {
                let newStr = str.substring(0,i) + str.substring(i+1, str.length)
                if (!res.has(newStr)) {
                    res.add(newStr)
                }
            }
        })
        return res
    }



    function checkStr(str) {
       let left = 0
        for(let char of str) {
            if (char == '(') {
                ++left
            } else if (char == ')') {
                --left
            }
            if (left < 0) {
                return false
            }
        }
        if (left != 0) return false
        return true
    }
};

console.log(removeInvalidParentheses("()())()"))
console.log(removeInvalidParentheses("(a)())()"))
console.log(removeInvalidParentheses(")("))