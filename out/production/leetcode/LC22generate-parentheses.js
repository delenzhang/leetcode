/**
 *
 * 输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
示例 2：
 n=2
 ()() (())

输入：n = 1
输出：["()"]
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let str1 = []
    function generateParen(str, left, right) {
        // if (right > left) return;
        if ((left + right) >= 2 * n) {

            if (left === n &&  n === right) {
                str1.push(str)
            }
            return;
        }
        generateParen(str + '(' , left+1, right)
        generateParen(str + ')' , left, right+1)
    }
    generateParen('', 0, 0)
    console.log(str1)
    return  str1
};

generateParenthesis(2)