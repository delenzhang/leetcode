let l = 100000
let arr = new Array(l).fill(0).map((item, index) => new Array(index + 1).fill('ab').join(''))
 function TreeNode(val, text, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.text = text
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}
let root = new TreeNode(arr[0])
/**
 *    1
 *   2  3
 *  4 5 6 7
 *
 */
function createTree(node) {
    if (node.val * 2 <= l) {
        let num = node.val * 2
        node.left = new TreeNode(node.val * 2, new Array(num).fill('a').join(''))
        createTree(node.left)
    }
    if (node.val * 2 + 1 <= l) {
        let num = node.val * 2 + 1
        node.right = new TreeNode(node.val * 2 +1, new Array(num).fill('a').join(''))
        createTree(node.right)
    }
}
createTree(root)
let map1 = {}, map2 = {}
function readTree(node) {
    if (!node) return
    if (node.val) {
        map1[node.val] = node.text
    }
    readTree(node.left)
    readTree(node.right)
}
let now =Date.now()
readTree(root)
console.log('递归损耗时间:', Date.now() - now)


function readTreeStack(root) {
    let stack = [root]
    while (stack.length > 0) {
        let node = stack.pop()
         map2[node.val] = node.text
        if (node.right) {
            stack.push(node.right)
        }
        if (node.left) {
            stack.push(node.left)
        }
    }
}
let now1 =Date.now()
readTreeStack(root)
console.log('stack损耗时间:', Date.now() - now1)