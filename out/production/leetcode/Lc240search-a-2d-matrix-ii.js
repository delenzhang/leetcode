// @ts-ignore
function searchMatrix(matrix, target) {
    let m = matrix.length, n = matrix[0].length;
    if (m == 0)
        return false;
    if (m == 1 && n == 1) {
        return matrix[0][0] == target;
    }
    if (n == 1) {
        return findMatrix(0, 0, m - 1, n - 1);
    }
    function findMatrix(i, j, endI, endJ) {
        if (i > m - 1 || j > n - 1 || i > endI || j > endJ) {
            return false;
        }
        let startM = i, startN = j;
        let endM = endI, endN = endJ;
        let midM = (startM + endM) >> 1;
        let midN = (startN + endN) >> 1;
        if (matrix[midM][midN] == target) {
            return true;
        }
        else if (matrix[midM][midN] > target) {
            return findMatrix(i, j, endI, midN - 1) || findMatrix(i, j, midM - 1, endJ);
        }
        else {
            return findMatrix(midM + 1, j, endI, endJ) || findMatrix(i, midN + 1, endI, endJ);
        }
        return false;
    }
    return findMatrix(0, 0, m - 1, n - 1);
}
;
console.log(searchMatrix([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 23));
console.log(searchMatrix([[1, 3, 5]], 1));
//# sourceMappingURL=Lc240search-a-2d-matrix-ii.js.map