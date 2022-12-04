// @ts-ignore
function reachableNodes(edges, maxMoves, n) {
    let visited = new Array(n).fill(0).map(item => new Array(n).fill(0));
    let visitedPoint = new Array(n).fill(0);
    for (let i = 0; i < edges.length; i++) {
        let edge = edges[i];
        visited[edge[0]][edge[1]] = 0;
        visited[edge[1]][edge[0]] = 0;
    }
    let sum = 0;
    function dps(i, lastI, move) {
        if (move >= 0 && !visitedPoint[i]) {
            sum++;
            visitedPoint[i] = 1;
        }
        if (move == 0) {
            return;
        }
        for (let edge of edges) {
            if (edge[0] == i || edge[1] == i) {
                let j = edge[0] == i ? edge[1] : edge[0];
                let edgeNum = edge[2] + 1;
                if (move >= edgeNum) {
                    visited[i][j] = Math.max(visited[i][j], edgeNum - 1);
                    dps(j, i, move - edgeNum);
                }
                else {
                    visited[i][j] = Math.max(visited[i][j], move);
                }
            }
        }
    }
    dps(0, -1, maxMoves);
    for (let edge of edges) {
        sum += Math.min(visited[edge[0]][edge[1]] + visited[edge[1]][edge[0]], edge[2]);
    }
    return sum;
}
;
console.log(reachableNodes([[0, 1, 10], [0, 2, 1], [1, 2, 2]], 6, 3)); // 13
console.log(reachableNodes([[0, 1, 4], [1, 2, 6], [0, 2, 8], [1, 3, 1]], 10, 4)); // 23
console.log(reachableNodes([[1, 2, 4], [1, 4, 5], [1, 3, 1], [2, 3, 4], [3, 4, 5]], 17, 5)); //1
//
console.log(reachableNodes([[2, 4, 2], [3, 4, 5], [2, 3, 1], [0, 2, 1], [0, 3, 5]], 14, 5)); //18
console.log(reachableNodes([[3, 4, 8], [0, 1, 3], [1, 4, 0], [1, 2, 3], [0, 3, 2], [0, 4, 10], [1, 3, 3], [2, 4, 3], [2, 3, 3], [0, 2, 10]], 7, 5)); //43
console.log(reachableNodes([[0, 2, 3], [0, 4, 4], [2, 3, 8], [1, 3, 5], [0, 3, 9], [3, 4, 6], [0, 1, 5], [2, 4, 6], [1, 2, 3], [1, 4, 1]], 8, 5)); //43
//# sourceMappingURL=Lc882reachable-nodes-in-subdivided-graph.js.map