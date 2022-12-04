/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let l = word.length,  m = board.length, n = board[0].length
    let char1 = word[0]
    let visited = new Array(m).fill(0).map(item => new Array(n).fill(false))

    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if (board[i][j] === char1) {
                visited[i][j] =true
                if (dps(i, j, 1)) {
                    return true
                }
                 visited[i][j] =false
            }
        }
    }

    return  false

    function dps(i, j, start) {
        return check(i-1, j, start) || check(i+1, j, start) || check(i, j-1, start) || check(i, j+1, start)
    }

    function check(i, j, start) {
        let char = word[start]
        if (i < m && i >=0 && j >=0 && j <n && board[i][j] == char && !visited[i][j]) {
            visited[i][j] = true
            if (start == l-1) return true
            if (start < l-1 && dps(i, j, start+1)) {
                return true
            }
            visited[i][j] = false
        }
        return  false
    }

};

console.log(exist([["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"]]
,"AAAAAAAAAAAAAAB"))