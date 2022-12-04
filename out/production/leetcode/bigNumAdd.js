function isLt(a,b) {
    let al = a.length, bl = b.length
    if (al > bl) {
        return true
    } else if (al < bl) {
        return false
    } else {
        let flag = true
        for (let i = 0; i < al; i++) {
            if (a[i] < b[i]) {
                flag = false
                break
            }
        }
        return flag
    }
}
function bigNumSum(a, b) {
    if (a === b) return '0';
    let al = a.length, bl = b.length
    let l = Math.max(al, bl)
    // console.log(a, b, l, isLt(a, b))
    let res = ''
    if (isLt(a, b)) {
        a = new Array(l - al).fill(0).join('') + a
        b = new Array(l - bl).fill(0).join('') + b
        let flag = 0
        for (let i  = 0; i < l; i++) {
            let ac = a[l - i - 1] * 1, bc = b[l-i-1] * 1
            let item = ac - bc - flag
            if (item >= 0) {
                flag = 0
            } else {
                item = 10 + ac - bc -flag
                flag = 1
            }
            // console.log(flag, item, ac, bc)
            res = item + res;
        }
        let i = 0
        while (i < res.length) {
            if (res[i] != '0') {
                break
            } else {
                i++
            }
        }
        return res.substring(i)
    } else {
        return '-' + bigNumSum(b, a)
    }

}
function bigNumAdd(a, b) {
    if (a.startsWith('+')) {
        a = a.substring(1);
    }
    if (b.startsWith('+')) {
        b = b.substring(1)
    }
    if (a.startsWith('-') && b.startsWith('-')) {
        return '-' + bigNumAdd(a.substring(1), b.substring(1));
    } else if (a.startsWith('-')) {
        return bigNumSum(b, a.substring(1))
    } else if (b.startsWith('-')) {
        return bigNumSum(a, b.substring(1))
    }

    let la = a.length, lb = b.length
    let l = Math.max(la, lb)
    a = new Array(l - la).fill(0).join('') + a;
    b = new Array(l -lb).fill(0).join('') + b;
    let carry = 0
    let res = ''
    for (let i = 0; i < l; i++) {
        let sum = a[l - i - 1] * 1 + b[l - i - 1] * 1 + carry
        if (sum > 9) {
            carry = Math.floor(sum / 10)
        } else {
            carry = 0
        }
        res = sum % 10 + res
    }
    if (carry  == 1) res = 1 + res;
    return res
}

let a = '9', b = '1000001'
console.log(a*1 + b *1)
console.log(bigNumAdd(a, b))