class ListNode {
    value: number
    next?: ListNode

    constructor(value: number) {
        this.value = value 
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
