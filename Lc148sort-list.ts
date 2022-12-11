// @ts-ignore
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
// @ts-ignore
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
   }
}

// @ts-ignore
function createListNode(arr) {
    let head = new ListNode(-1)
    let temp = head
    for(let i = 0; i < arr.length; i++) {
        temp.next = new ListNode(arr[i])
        temp = temp.next
    }
    return head.next
}

// @ts-ignore
function sortList(head: ListNode | null): ListNode | null {
    let l = 0
    let node = head
    while(node) {
        ++l
        node = node.next
    }
    let dumpHead = new ListNode(-1, head)
    for(let len = 2; len <= 2 * l; len <<= 1) {
        let halfLen = len / 2
        let pre = dumpHead, cur = dumpHead.next
        let preMergeList = dumpHead
        while(cur) {
            let first = cur
            for (let i = 0; i < halfLen && cur; i++) {
                pre = cur
                cur = cur.next
            }
            pre.next = null
            let second = cur
            for (let i = 0; i < halfLen && cur; i++) {
                pre = cur
                cur = cur.next
            }
            pre.next = null
            let newNode = merge(first, second)
            preMergeList.next = newNode
            while (newNode.next) {
                newNode = newNode.next
            }
            preMergeList = newNode
            newNode.next = cur
        }
    }
    log(dumpHead.next)
    return dumpHead.next
    function merge(list1, list2) {
        let first = new ListNode(-1)
        let cur = first
        while(list1 && list2) {
            if (list1.val < list2.val) {
                cur.next = list1
                cur = cur.next
                list1 = list1.next
            } else {
                cur.next = list2
                cur = cur.next
                list2 = list2.next
            }
        }
        if (list1) {
            cur.next = list1
        }
        if (list2) {
            cur.next = list2
        }
        return first.next
    }
};

// @ts-ignore
function log(listNode) {
    let res = []
    while (listNode) {
        res.push(listNode.val)
        listNode = listNode.next
    }
    console.log(res)
}

sortList(createListNode([-1,5,3,4,0]))