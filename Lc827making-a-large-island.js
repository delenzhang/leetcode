/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
    let max = 0, n = grid.length
    let isNoZero = true
    for(let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 0) {
                isNoZero = false
                break
            }
        }
    }
    if (isNoZero) {
        return n*n
    }
    const map = new Map()
    function dfs(i, j) {
        if (i < 0 || j < 0 || i > n-1 || j > n-1 || grid[i][j] == 0 || map.has(i+''+j)) {
            return 0
        }
        let count = 1
        map.set(i+''+j, true)
        let di = [0, 0, 1, -1]
        let dj = [1, -1, 0, 0]
        for(let k = 0; k < 4; k++) {
            let curI = i + di[k], curJ = j + dj[k]
            count += dfs(curI, curJ)
        }
        return count
    }



    for(let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 0) {
                grid[i][j] = 1
                const count = dfs(i,j)
                max = Math.max(max, count)
                grid[i][j] = 0
                map.clear()
            }
        }
    }
    console.log(max)
    return max
};
/*
largestIsland([[1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0],
                    [0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0],
                    [1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1],
                    [1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1],
                    [1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0],
                    [0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1],
                    [0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0],
                    [0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0],
                    [0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1],
                    [0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0],
                    [0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1],
                    [0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1],
                    [0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0],
                    [1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1],
                    [1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0],
                    [1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0],
                    [1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0],
                    [0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1],
                    [1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1],
                    [1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0],
                    [1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0],
                    [0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0],
                    [1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0],
                    [1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1],
                    [0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0],
                    [0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1],
                    [1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1],
                    [0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1],
                    [0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1],
                    [0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1],
                    [1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1],
                    [1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0],
                    [0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0],
                    [1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1],
                    [1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1],
                    [1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1],
                    [1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0],
                    [1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1],
                    [1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0],
                    [0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0],
                    [0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1],
                    [0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0],
                    [0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1],[1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1],[0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1],[1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1],[0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0],[0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0],[0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1],[0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1]])
 */

largestIsland([[1, 0], [0, 1]])