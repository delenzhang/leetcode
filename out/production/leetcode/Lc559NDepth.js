function Node(val) {
 this.val = val;
 this.children = [];
}
function getMaxDepth(root) {
    // let depth = 1
    // let stack = [{
    //     level: depth,
    //     node: root,
    // }]
    // let curNode
    // while (curNode = stack.shift()) {
    //     if (curNode.children.length > 0) {
    //         depth = curNode.level + 1;
    //         curNode.node.children.forEach(item => {
    //           stack.push({
    //               level: depth,
    //               node: item
    //           })
    //         })
    //     }
    // }
    // return depth
    if(!root) return 0
    let depth = 1
    let stack = [root]

    while (stack.length) {
        let s = stack.length
        while (s > 0) {
            let curNode = stack.shift()
            curNode.children && curNode.children.forEach(item => {
                stack.push(item)
            })
            --s;
        }
        ++depth
    }
    return depth
}