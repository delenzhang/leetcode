/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
// @ts-ignore
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
// @ts-ignore
function creatArrayTree(arr) {
    let l = arr.length;
    let root = new TreeNode(arr[0]);
    // @ts-ignore
    /**
     *    1
     *   2  3
     *  4 5 6 7
     *
     */
    function createTree(node) {
        let list = [node];
        for (let i = 1; i < l; i += 2) {
            let left = arr[i];
            let right = arr[i + 1];
            let cur = list.shift();
            if (left) {
                cur.left = new TreeNode(left);
                list.push(cur.left);
            }
            if (right) {
                cur.right = new TreeNode(right);
                list.push(cur.right);
            }
        }
    }
    createTree(root);
    return root;
}
// @ts-ignore
function maxPathSum(root) {
    let max = Number.MIN_SAFE_INTEGER;
    function getMax(node) {
        if (!node) {
            return Number.MIN_SAFE_INTEGER;
        }
        let left = getMax(node.left);
        let right = getMax(node.right);
        max = Math.max(max, node.val + left + right);
        max = Math.max(max, left);
        max = Math.max(max, right);
        let curMax = node.val + left;
        curMax = Math.max(curMax, node.val + right);
        curMax = Math.max(curMax, node.val);
        return curMax;
    }
    max = Math.max(getMax(root), max);
    console.log(max);
    return max;
}
;
maxPathSum(creatArrayTree([1, 2, 3])); // 6
maxPathSum(creatArrayTree([-10, 9, 20, null, null, 15, 7])); //42
maxPathSum(creatArrayTree([2, -1])); // 2
maxPathSum(creatArrayTree([-3])); // -3
//# sourceMappingURL=Lc124binary-tree-maximum-path-sum.js.map