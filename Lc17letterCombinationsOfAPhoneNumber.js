var letterCombinations = function(digits) {
    let arr = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    const resStr = []
    for(let i = 0; i < digits.length; i++) {
        let index = parseInt(digits[i]) -2
        resStr.push(arr[index])
    }
    if (resStr.length === 0) {
        return []
    }
    if (resStr.length === 1) {
        return resStr[0].split('')
    }
    let fisrt = resStr[0].split('')
    for(let i = 1; i < resStr.length; i++) {
        fisrt = backStack(fisrt, resStr[i])
    }
    function backStack(arr, str) {
        let res = []
        arr.forEach(item => {
          for(let i = 0;  i<str.length; i++) {
              res.push(item + str[i])
          }
        })

        return res
    }
    return fisrt
};

console.log(letterCombinations('235'))