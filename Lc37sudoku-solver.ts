/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    let n = 9, res = []
    for(let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] == '.') {
                res.push([i,j])
            }
        }
    }
    let l = res.length

    dps(res[0], 0)

    console.log(board)

    function dps(point, index) {
        const [i, j] = point

        let resArr = isValidSudo(i, j)
        if (index == l -1) {
            if (resArr.length == 1) {
                board[i][j] = "" + resArr[0]
                return true
            }
        }
        for(let k = 0; k < resArr.length; k++) {
            let num = resArr[k]
            board[i][j] = "" + num
            const result = dps(res[index+1], index+1)
            if (!result) {
                board[i][j] = '.'
            } else {
                return true
            }
        }
        return false
    }

    function isValidSudo(i,j) {
        let curRow = new Array(9).fill(0)
        let curCol = new Array(9).fill(0)
        let curBlock = new Array(9).fill(0)
        for(let k = 0; k < n ; k++) {
            if (board[i][k] != '.') {
                 ++curRow[board[i][k]-1]
            }
            if (board[k][j] != '.') {
                ++curCol[board[k][j]-1]
            }
            // 6 3
            let blockI = Math.floor(i / 3) * 3 + Math.floor(k / 3) // 6 +  0 0 0 1 1 1 2 2 2
            let blockJ = Math.floor(j / 3) * 3 + (k % 3) // 3 4 5 // 3  + 0 1 2 0 1 2 0 1 2
            if (board[blockI][blockJ] != '.') {
                ++curBlock[board[blockI][blockJ]-1]
            }
            if (curRow[board[i][k]-1] > 1 || curCol[board[k][j]-1] > 1 || curBlock[board[blockI][blockJ]-1] > 1) {
                return []
            }
        }
        let res = []
        for(let i = 0; i < n; i++) {
            if (curRow[i] == 0 && curCol[i] == 0&& curBlock[i] == 0) {
                res.push(i+1)
            }
        }
        return res
    }
};

solveSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]])