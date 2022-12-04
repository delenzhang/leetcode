/**
 * 1 1 1 1 1 1  3
 *  10  4       2 2
 * @param stones
 * @param k
 */
// @ts-ignore
function mergeStones(stones, k) {
    let l = stones.length;
    if (!canSplit(0, l - 1)) {
        return -1;
    }
    let newLen = l;
    let dp = new Array(newLen).fill(0).map(item => new Array(newLen).fill(Number.MAX_SAFE_INTEGER));
    // i,j =
    for (let i = newLen - k; i >= 0; i--) {
        for (let j = i + k - 1; j < newLen; j++) {
            if (i == j) {
                dp[i][j] = stones[i];
                continue;
            }
            if (!canSplit(i, j)) {
                dp[i][j] = Number.MAX_SAFE_INTEGER;
            }
            else {
                if (j = i + k - 1) {
                    dp[i][j] = cost(i, j);
                }
                else {
                    // 0 ,1, 2 3 4 5 6
                }
            }
        }
    }
    console.log(dp);
    return dp[0][newLen - 1];
    function canSplit(i, j) {
        let leftNum = j - i + 1, canRemove = false;
        while (true) {
            if (leftNum % k === 0) {
                leftNum = leftNum / k;
            }
            else {
                leftNum = Math.floor(leftNum / k) + (leftNum % k);
            }
            if (leftNum === k) {
                canRemove = true;
                break;
            }
            if (leftNum < k && leftNum != 1) {
                break;
            }
        }
        return canRemove;
    }
    function cost(i, j) {
        let sum = 0;
        for (let s = i; s <= j; s++) {
            sum += stones[s];
        }
        return sum;
    }
}
;
console.log(mergeStones([3, 5, 1, 2, 6], 3));
//# sourceMappingURL=Lc1000minimum-cost-to-merge-stones.js.map