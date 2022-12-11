/**
 * n = 3   8个
 * 000 001 011 111 101 100  110 010
 * @param n
 */
// @ts-ignore
function grayCode(n) {
    let l = Math.pow(2, n);
    let originArr = new Array(l).fill(0);
    originArr[0] = 1;
    function getGrayCode(arr, index) {
        let last = arr[arr.length - 1];
        console.log(last);
        if (index === Math.pow(2, n) - 1) {
            if (testOne(last, 0)) {
                return arr;
            }
            return false;
        }
        // let lastArr = last.toString(2).padStart(n, 0).split('')
        // for(let i = 0; i < lastArr.length; i++) {
        //     let newArr = lastArr.slice(0, i).concat([lastArr[i] == 1 ? '0':'1']).concat(lastArr.slice(i+1, lastArr.length))
        //     let num = parseInt(newArr.join(''), 2)
        //     if(originArr[num] == 0) {
        //         originArr[num] = 1
        //         return getGrayCode([...arr, num], index+1)
        //     }
        // }
        for (let i = 0; i < n; i++) {
            let next = last ^ (1 << i);
            if (originArr[next] == 0) {
                originArr[next] = 1;
                return getGrayCode([...arr, next], index + 1);
            }
        }
        return false;
    }
    let result = getGrayCode([0], 0);
    console.log(result);
    return result;
    function testOne(a, b) {
        let ret = a ^ b;
        return (ret & (ret - 1)) == 0;
    }
}
;
// grayCode(2)//[ 0, 2, 3, 1 ]
// grayCode(1) // [0,1]
grayCode(16);
//# sourceMappingURL=Lc89gray-code.js.map