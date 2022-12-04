/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 *
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    let newRoot = new TreeNode(-1)
    let node = newRoot
    function preOrder(root) {
        node.right = root
        node = node.right
        if (root.left) preOrder(root.left)
        if (root.right) preOrder(root.right)
    }
    preOrder(root)
    console.log(newRoot.right)
    return newRoot.right
};