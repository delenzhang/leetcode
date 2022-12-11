/**
 *
 * @param boxes
 * @param portsCount
 * @param maxBoxes
 * @param maxWeight
 */
// @ts-ignore
function boxDelivering(boxes, portsCount, maxBoxes, maxWeight) {
    let l = boxes.length;
    let prefixSum = new Array(l + 1).fill(0);
    prefixSum[0] = 0;
    for (let i = 1; i <= l; i++) {
        prefixSum[i] = (prefixSum[i - 1] ? prefixSum[i - 1] : 0) + boxes[i - 1][1];
    }
    let neg = new Array(l).fill(0);
    neg[0] = 0;
    for (let i = 1; i < l; i++) {
        neg[i] = neg[i - 1] + (boxes[i][0] == boxes[i - 1][0] ? 0 : 1);
    }
    // console.log(prefixSum, neg)
    let dp = new Array(l + 1).fill(0);
    dp[0] = 0;
    // dp[i]= min(dp[j] + cost(i,j))
    /**
     * i-j+1 <= maxBoxes
     * dp[i]= min(dp[j-1] + neg(i-1)-neg(j-1))+2  i - maxBoxes + 1 <=j <=i
     *  prefixSum[i] - prefixSum[j-1] <= maxWeight
     *   1<=j
     */
    let queue = [0];
    for (let i = 1; i <= l; i++) {
        dp[i] = dp[i - 1] + 2;
        // 使用单调队列优化
        // for(let j = i; j >=1 && j >= i-maxBoxes+1; j--) {
        //     if ((prefixSum[i] - prefixSum[j-1]) > maxWeight) {
        //         break
        //     }
        //     dp[i] = Math.min(dp[i], dp[j-1] + neg[i-1] - neg[j-1] + 2)
        // }
        while (queue.length != 0 && ((i - queue[0]) > maxBoxes || (prefixSum[i] - prefixSum[queue[0]]) > maxWeight)) {
            queue.shift();
        }
        if (queue.length) {
            dp[i] = Math.min(dp[queue[0]] + neg[i - 1] - neg[queue[0]] + 2, dp[i]);
        }
        if (i < l) {
            while (queue.length != 0 && dp[queue[queue.length - 1]] - neg[queue[queue.length - 1]] >= (dp[i] - neg[i])) {
                queue.pop();
            }
            queue.push(i);
        }
    }
    console.log(dp, dp[l]);
    return dp[l];
}
;
boxDelivering([[1, 1], [2, 1], [1, 1]], 2, 3, 3); // 4
boxDelivering([[1, 2], [3, 3], [3, 1], [3, 1], [2, 4]], 3, 3, 6); // 6
boxDelivering([[1, 4], [1, 2], [2, 1], [2, 1], [3, 2], [3, 4]], 3, 6, 7); // 6
boxDelivering([[2, 4], [2, 5], [3, 1], [3, 2], [3, 7], [3, 1], [4, 4], [1, 3], [5, 2]], 5, 5, 7); //14
//# sourceMappingURL=Lc1687delivering-boxes-from-storage-to-ports.js.map