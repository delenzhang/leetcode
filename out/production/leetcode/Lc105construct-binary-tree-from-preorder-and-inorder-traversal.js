/**
 * Definition for a binary tree node.
 function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }

var buildTree = function(preorder, inorder) {
    let pre = 0, ino = 0
    let stop = Number.MAX_VALUE
    function buildTreeHelper(stop) {
        if (pre == preorder.length) {
            return null
        }
        if (inorder[ino] == stop) {
            ino++;
            return null
        }
        let root_val = preorder[pre]
        let root = new TreeNode(root_val)
        ++pre
        root.left = buildTreeHelper(root_val)
        root.right = buildTreeHelper(stop)
        return root
    }
    return buildTreeHelper(stop)
};

console.log(buildTree([3,9,20,15,7],
[9,3,15,20,7]))