// @ts-ignore
function isValidSudoku(board) {
    let n = 9;
    for (let i = 0; i < n; i++) {
        let map = new Map();
        for (let j = 0; j < n; j++) {
            if (board[i][j] != '.') {
                if (!map.has(board[i][j])) {
                    map.set(board[i][j], 1);
                }
                else {
                    return false;
                }
            }
        }
    }
    for (let i = 0; i < n; i++) {
        let map = new Map();
        for (let j = 0; j < n; j++) {
            if (board[j][i] != '.') {
                if (!map.has(board[j][i])) {
                    map.set(board[j][i], 1);
                }
                else {
                    return false;
                }
            }
        }
    }
    /**
     * 0 00
     * 1 03
     * 2 06
     * 3 30
     * 4 33
     * 5 36
     * 6 60
     * 7 63
     * 8 66
     */
    for (let k = 0; k < n; k++) {
        let startI = Math.floor(k / 3) * 3;
        let startJ = (k % 3) * 3;
        let map = new Map();
        for (let i = 0; i < n / 3; i++) {
            for (let j = 0; j < n / 3; j++) {
                let cur = board[startI + i][startJ + j];
                if (cur != '.') {
                    if (!map.has(cur)) {
                        map.set(cur, 1);
                    }
                    else {
                        return false;
                    }
                }
            }
        }
    }
    return true;
}
;
// @ts-ignore
const res = isValidSudoku([["8", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]);
console.log(res);
//# sourceMappingURL=Lc36valid-sudoku.js.map