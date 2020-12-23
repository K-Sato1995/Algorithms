// 配列とは異なり、連結リストには特定のIndexでアクセスはできない
// リスト内のK番目の要素を見つけたい場合はheadからK個分の要素を走査する必要がある
// O(n)
// https://codeburst.io/linked-lists-in-javascript-es6-code-part-1-6dd349c3dcc3#:~:text=To%20remove%20the%20last%20node,the%20last%20node%20to%20null.
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

// Append a new node to the end of the list
const append = (head: ListNode, value: number): ListNode => {
    let newNode = new ListNode(value)
    let currentNode = head 

    while(currentNode.next !== undefined) {
        currentNode = currentNode.next
    }

    return currentNode.next = newNode
}

// Add a node to the beggining of the list
const push = (head: ListNode, value: number): ListNode => {
    let newNode = new ListNode(value)
    newNode.next = head

    return newNode
}

// Delte a node at the given position
const deleteNode = (head: ListNode | undefined, key: number) => {
    let currentNode = head

    if (currentNode === null) return

    if(currentNode?.value === key) {
        currentNode = currentNode.next
    }
    
    while(currentNode?.next !== undefined){
        if(currentNode.next.value === key) {
            currentNode.next = currentNode.next.next
        }
    }
}

const reverseList = (head: ListNode) => {
    let currentNode: ListNode = head
    let prevNode: ListNode | undefined
    // let nextNode: ListNode | undefined
    

    while(currentNode.next !== undefined) {
        // nextNode = currentNode.next
        currentNode.next = prevNode
        prevNode = currentNode
        // currentNode = nextNode
    }
}

const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)
const node4 = new ListNode(4)

node1.next = node2
node2.next = node3
node3.next = node4

// console.log(countNode(node1)) //=> 4
export { ListNode, append, push, countNode, deleteNode }