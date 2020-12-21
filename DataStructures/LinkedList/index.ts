// 配列とは異なり、連結リストには特定のIndexでアクセスはできない
// リスト内のK番目の要素を見つけたい場合はheadからK個分の要素を走査する必要がある
// O(n)
class ListNode {
    value: number
    next?: ListNode

    constructor(value: number) {
        this.value = value 
    }

    append(value: number) {
        const newNode = new ListNode(value)
        let currentNode: ListNode = this

        while(currentNode.next !== undefined) {
            currentNode = currentNode.next
        }

        currentNode.next = newNode
    }

    countNode() {
        let currentNode: ListNode = this
        let count = 0

        while(currentNode.next !== undefined) {
            currentNode = currentNode.next 
            count++
        }

        return count
    }
}

// Returns the number of nodes in a linked list
const countNode = (head: ListNode): number => {
    let count = 1
    let currentNode: ListNode = head

    while(currentNode.next !== undefined) {
        currentNode = currentNode.next
        count++
    }

    return count
}

// Delte a node at the given position
const deleteNode = (head: ListNode, position: number) => {

    let currentNode: ListNode = head

    while(currentNode.next !== undefined){

    }

    return head
}
// const reverseList = (head: ListNode) => {
//     let currentNode: ListNode = head
//     let prevNode: ListNode | undefined
//     let nextNode: ListNode | undefined
    

//     while(currentNode.next !== undefined) {
//         nextNode = currentNode.next
//         currentNode.next = prevNode
//         prevNode = currentNode
//         currentNode = nextNode
//     }
// }

const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)
const node4 = new ListNode(4)

node1.next = node2
node2.next = node3
node3.next = node4

// console.log(countNode(node1)) //=> 4
