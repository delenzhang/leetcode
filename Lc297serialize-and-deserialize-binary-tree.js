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
/*
 * Encodes a tree to a single string.
 */
// @ts-ignore
function serialize(root) {
    let list = [root], num = 1, res = [];
    while (list.length) {
        if (num == 0) {
            break;
        }
        let node = list.unshift();
        if (!node) {
            res.push(null);
            list.push(null);
            list.push(null);
        }
        else {
            res.push(node.val);
            --num;
            list.push(node.left);
            if (node.left) {
                ++num;
            }
            list.push(node.right);
            if (node.right) {
                ++num;
            }
        }
    }
    return res.join(',');
}
;
/*
 * Decodes your encoded data to tree.
 */
// @ts-ignore
function deserialize(data) {
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
    let arr = data.split(',');
    return creatArrayTree(arr);
}
;
// [4,-7,-3,null,null,-9,-3,9,-7,-4,null,6,null,-6,-6,null,null,0,6,5,null,9,null,null,-1,-4,null,null,null,-2]
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */ 
//# sourceMappingURL=Lc297serialize-and-deserialize-binary-tree.js.map