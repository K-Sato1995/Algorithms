class Box {
    value: number
    next?: Box

    constructor(value: number) {
        this.value = value 
    }
}

// Returns the number of nodes in a linked list
const countNode = (head: Box): number => {
    let count = 1
    let currentNode: Box = head

    while(currentNode.next !== undefined) {
        currentNode = currentNode.next
        count++
    }

    return count
}

const node1 = new Box(1)
const node2 = new Box(2)
const node3 = new Box(3)
const node4 = new Box(4)

node1.next = node2
node2.next = node3
node3.next = node4


console.log(countNode(node1)) //=> 4
