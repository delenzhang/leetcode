// @ts-ignore
function closestCost(baseCosts: number[], toppingCosts: number[], target: number): number {
    let bl= baseCosts.length, tl = toppingCosts.length * 2
    baseCosts.sort((a,b) => a-b)
    toppingCosts = toppingCosts.concat(toppingCosts).sort((a,b) => a-b)
    // console.log(baseCosts, toppingCosts)
    let m = tl + 1
    let dp = new Array(m).fill(0).map(item => new Array(target+1).fill(0))

    for(let i = 0 ;i <= target; i++) {
        let closed = baseCosts[0], abs = Math.abs(i - baseCosts[0])
        for (let base of baseCosts) {
            if (Math.abs(base - i) < abs) {
                closed = base
                abs = Math.abs(base -i)
            }
        }
        dp[0][i] = closed
    }
    for(let i = 0; i <= tl; i++) {
        dp[i][0] = baseCosts[0]
    }

    for(let i = 1; i <= tl; i++) {
        for(let j = 1; j <= target; j++) {
             let choised = (j>=toppingCosts[i-1] ? dp[i-1][j-toppingCosts[i-1]]: dp[i-1][0]) + toppingCosts[i-1]
                let nochoise = dp[i-1][j]
                if ([4797, 9853].indexOf(j) > -1) {
                     console.log(i, j, `choised: ${choised}: ${ dp[i-1][j-toppingCosts[i-1]]}`, `nochoise: ${nochoise}`)
                }

                if (Math.abs(choised - j) == Math.abs(nochoise - j)) {
                    dp[i][j] = Math.min(choised, nochoise)
                } else {
                    if (Math.abs(choised - j) > Math.abs((nochoise - j))) {
                        dp[i][j] = nochoise
                    } else  {
                        dp[i][j] = choised
                    }
                }
        }
    }
    console.log( dp[tl][target])
    return dp[tl][target]
};

closestCost([2,3], [4,5,100], 18) // 17
closestCost([10,3], [2,5], 9) // 8
closestCost([10], [1], 1) // 10
closestCost([1,7], [3,4], 10) // 10
closestCost([3], [3], 9) // 9
closestCost([3738,5646,197,7652], [5056], 9853) // 10309