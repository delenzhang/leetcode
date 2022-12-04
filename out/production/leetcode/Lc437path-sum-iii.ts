// @ts-ignore
// @ts-ignore
class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }
// @ts-ignore
function creatArrayTree(arr) {
    let l = arr.length
    let root = new TreeNode(arr[0])
    // @ts-ignore
    /**
     *    1
     *   2  3
     *  4 5 6 7
     *
     */
    function createTree(node) {
        let list = [node]
        for(let i = 1; i< l; i+=2) {
            let left = arr[i]
            let right = arr[i+1]
            let cur = list.shift()
            if (left) {
                cur.left = new TreeNode(left)
                list.push(cur.left)
            }
            if (right) {
                cur.right = new TreeNode(right)
                list.push(cur.right)
            }
        }
    }

    createTree(root)
    return root
}





// @ts-ignore
function pathSum(root: TreeNode | null, targetSum: number): number {
    function findPathSum(node, target, isLink) {
        let count = 0
        if (!node) {
            return count
        }
        if (node.val == target) {
            ++count
        }
        let _target = target - node.val
        count += findPathSum(node.left, _target, true)
        count += findPathSum(node.right, _target, true)
        if (!isLink) {
            count += findPathSum(node.left, target, false)
            count += findPathSum(node.right, target, false)
        }
        return  count
    }
    console.log(root)
    return findPathSum(root, targetSum, false)
};
// console.log(pathSum(creatArrayTree([1]), 0)) //0
// console.log(pathSum(creatArrayTree([0,1,1]), 0)) //1

console.log(pathSum(creatArrayTree([1,null,2,null,3,null,4,null,5]), 3)) //2
// console.log(pathSum(creatArrayTree([1]), 1))
console.log(pathSum(creatArrayTree([10,5,-3,3,2,null,11,3,-2,null,1]), 8)) //3
console.log(pathSum(creatArrayTree([5,4,8,11,null,13,4,7,2,null,null,5,1]), 22)) //3