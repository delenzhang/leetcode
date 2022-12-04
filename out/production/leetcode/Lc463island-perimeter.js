/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let row = grid.length, col = grid[0].length, num = 0
    let list = []
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            if (grid[i][j] == 1) {
                list.push(i)
                list.push(j)
                grid[i][j] = -1
            }
            while(list.length > 0) {
                let curI = list.shift()
                let curJ = list.shift()
                if (grid[curI -1] && grid[curI -1][curJ] == 1) {
                    list.push(curI -1)
                    list.push(curJ)
                    grid[curI -1][curJ] = -1
                }
                if (grid[curI+1] && grid[curI+1][curJ] == 1) {
                    list.push(curI +1)
                    list.push(curJ)
                    grid[curI+1][curJ] = -1
                }
                if (grid[curI][curJ-1] && grid[curI][curJ-1] == 1) {
                    list.push(curI)
                    list.push(curJ -1)
                    grid[curI][curJ-1] = -1
                }
                if (grid[curI][curJ+1] && grid[curI][curJ+1] == 1) {
                    list.push(curI)
                    list.push(curJ +1)
                    grid[curI][curJ+1] = -1
                }
                let edge = 0
                if (curI -1 < 0 || grid[curI -1][curJ] == 0) {
                    ++edge
                }

                if (curI+1 >= row || grid[curI+1][curJ] == 0) {
                    ++edge
                }

                if ( curJ - 1 < 0 || grid[curI][curJ-1] == 0) {
                    ++edge
                }

                if (curJ+1 >= col || grid[curI][curJ+1] == 0) {
                    ++edge
                }
                num += edge
                console.log(curI, curJ, edge)
            }
        }
    }
    console.log(num)
    return num
};

// var islandPerimeter = function (grid) {
//     const dx = [0, 1, 0, -1];
//     const dy = [1, 0, -1, 0];
//     const n = grid.length, m = grid[0].length;
//     let ans = 0;
//     for (let i = 0; i < n; ++i) {
//         for (let j = 0; j < m; ++j) {
//             if (grid[i][j]) {
//                 let cnt = 0;
//                 for (let k = 0; k < 4; ++k) {
//                     let tx = i + dx[k];
//                     let ty = j + dy[k];
//                     if (tx < 0 || tx >= n || ty < 0 || ty >= m || !grid[tx][ty]) {
//                         cnt += 1;
//                     }
//                 }
//                 ans += cnt;
//             }
//         }
//     }
//     console.log(ans)
//     return ans;
// };
// islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]])
islandPerimeter([[0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0],[0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0],[0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0],[0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],[1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],[0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],[0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0],[0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0],[0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0],[0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0]])