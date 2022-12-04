/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(Number.MAX_VALUE);
    dp[0] = 0
    let res = [[0]]
    for(let i = 1; i <= amount; i++) {
        let array = []
        for(let coin of coins) {
            if (i >= coin)  {
                if (dp[i]  > (dp [i-coin] + 1)) {
                    dp[i] = (dp [i - coin] + 1)
                    let _array = []
                    if (i != coin) {
                        for(let coinItem of res[i-coin]) {
                           _array.push(coinItem)
                        }
                    }
                    _array.push(coin)
                    array = _array
                }
            }
        }
        res.push(array)
    }
    console.log(res)
    return dp[amount];
};

console.log(coinChange([1,2,5], 11))