/*
*/
// @ts-ignore
function maximalRectangle(matrix) {
    let m = matrix.length, n = matrix[0].length;
    let tempMatrix = new Array(m).fill(0).map(item => new Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0) {
                tempMatrix[i][j] = parseInt(matrix[i][j]);
            }
            else {
                if (matrix[i][j] == '1') {
                    tempMatrix[i][j] = tempMatrix[i - 1][j] + 1;
                }
                else {
                    tempMatrix[i][j] = 0;
                }
            }
        }
    }
    let res = 0;
    for (let i = 0; i < m; i++) {
        let arr = tempMatrix[i], stack = [-1];
        arr.push(0);
        for (let j = 0; j <= n; j++) {
            while (stack[stack.length - 1] != -1 && arr[stack[stack.length - 1]] > arr[j]) {
                let area = arr[stack[stack.length - 1]] * (j - stack[stack.length - 2] - 1);
                res = Math.max(res, area);
                stack.pop();
            }
            stack.push(j);
        }
    }
    return res;
}
;
maximalRectangle([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]);
//# sourceMappingURL=Lc85maximal-rectangle.js.map