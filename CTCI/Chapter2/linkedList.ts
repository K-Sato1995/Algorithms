class ListNode { 
    value: number
    next: ListNode | null

    constructor(value: number, next:ListNode | null = null) {
        this.value = value
        this.next = next
    }
}

class LinkedList {
    head: ListNode | null
    size: number

    constructor() {
        this.head = null
        this.size = 0
    }
    
    insertFirst(value: number) {
        this.head = new ListNode(value, this.head)
        this.size++
    }
    
    printList() {
        let currentNode = this.head
        let count = 1

        if(currentNode == null) {
            console.log("List is empty")
            return
        }

        console.log(`size of the list: ${this.size}`)

        while(currentNode) {
            console.log(`Node:${count} | Value: ${currentNode.value}`)
            currentNode = currentNode.next
            count++
        }
    }
}

export { LinkedList, ListNode }