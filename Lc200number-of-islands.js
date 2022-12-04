/**
 * @param {character[][]} grid
 * @return {number}
    0 1 0 1 0
    1 0 1 0 1
    0 1 0 1 1
    1 0 0 1 1
    0 1 1 0 1

    0 1 1 2 2
    1 2 3 4 5
    1 3 4 6 6
    2 4 5 7 7
    2 5 6 8 8

  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
*/
var numIslands = function(grid) {
    let m = grid.length, n = grid[0].length, num = 0
    let stack = []
    for (let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                num++
                stack.push(i)
                stack.push(j)
                grid[i][j] = 0
            }
            while(stack.length > 0) {
                let p = stack.shift()
                let q = stack.shift()
                if (grid[p+1] && grid[p+1][q] == 1) {
                    stack.push(p+1)
                    stack.push(q)
                    grid[p+1][q] = 0
                }
                if (grid[p] && grid[p][q+1] == 1) {
                    stack.push(p)
                    stack.push(q+1)
                    grid[p][q+1] = 0
                }
            }
        }
    }
    return num
};
console.log(numIslands([["1","0","1","1","1"],
                             ["1","0","1","0","1"],
                             ["1","1","1","0","1"]]))