// @ts-ignore
function checkPowersOfThree(n) {
    while (n > 0) {
        if (n % 3 == 2) {
            return false;
        }
        n = Math.floor(n / 3);
    }
    return true;
}
;
// console.log(checkPowersOfThree(12))
console.log(checkPowersOfThree(21));
// console.log(checkPowersOfThree(91))
// checkPowersOfThree(10**7)
//# sourceMappingURL=Lc1780check-if-number-is-a-sum-of-powers-of-three.js.map