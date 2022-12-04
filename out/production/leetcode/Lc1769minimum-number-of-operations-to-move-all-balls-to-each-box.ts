// @ts-ignore
function minOperations(boxes: string): number[] {
    let l = boxes.length, res = []
    for(let i = 0; i < l;i++) {
        let num = 0
        for(let j = 0; j < l; j++) {
            if (i != j && boxes[j] == '1') {
                num += Math.abs(j - i)
            }
        }
        res.push(num)
    }
    console.log(res)
    return res
};


minOperations("110")
minOperations("001011")