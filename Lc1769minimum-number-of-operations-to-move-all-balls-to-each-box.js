// @ts-ignore
function minOperations(boxes) {
    let l = boxes.length, res = [];
    for (let i = 0; i < l; i++) {
        let num = 0;
        for (let j = 0; j < l; j++) {
            if (i != j && boxes[j] == '1') {
                num += Math.abs(j - i);
            }
        }
        res.push(num);
    }
    console.log(res);
    return res;
}
;
minOperations("110");
minOperations("001011");
//# sourceMappingURL=Lc1769minimum-number-of-operations-to-move-all-balls-to-each-box.js.map