// https://www.geeksforgeeks.org/implementation-linkedlist-javascript/
class ListNode {
  value: number
  next: ListNode | null

  constructor(value: number, next: ListNode | null = null) {
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

  // Find the node that has the given value
  find(target: number): ListNode | null {
    let currentNode = this.head

    while (currentNode) {
      if (currentNode.value === target) return currentNode
      currentNode = currentNode.next
    }

    return null
  }

  // Add a node to the beggining of the list
  insertFirst(value: number): void {
    this.head = new ListNode(value, this.head)
    this.size++
  }

  // Add a node to the end of the list
  insertLast(value: number): void {
    const newNode = new ListNode(value, null)
    let currentNode = this.head

    if (currentNode === null) {
      this.head = newNode
      return
    }

    while (currentNode.next !== null) {
      currentNode = currentNode.next
    }

    currentNode.next = newNode
    this.size++
  }

  // Remove all the elements that have the given value
  removeElements(target: number): ListNode | null {
    if (this.head === null) return this.head

    while (this.head !== null && this.head.value == target) {
      this.head = this.head.next
      this.size--
    }

    let currentNode = this.head

    while (currentNode && currentNode.next) {
      if (currentNode.next.value === target) {
        currentNode.next = currentNode.next.next
        this.size--
      } else {
        currentNode = currentNode.next
      }
    }

    return this.head
  }

  // Reverse the list
  reverseList(): void {
    let currentNode = this.head
    let prevNode: ListNode | null = null
    let nextNode: ListNode | null = null

    if (!currentNode) return

    // 最後のnodeがnullに到達するまで回す
    while (currentNode) {
      // 現在のNodeが元々指していた物を一時的に保持する
      nextNode = currentNode.next

      // 現在のNodeが次に指すべき物をここで設置する
      // (a -> bならReverseした際にb -> aにする
      currentNode.next = prevNode

      // 次のNodeに移動する為にPrevにCurrentNodeをセットする
      prevNode = currentNode

      // 次のNodeに移動する為にCurrentNodeにnextNodeをセットする
      currentNode = nextNode
    }

    this.head = prevNode
  }

  ///////////// Print List Info ////////////////////
  printList(): void {
    let currentNode = this.head
    let count = 1

    if (currentNode == null) {
      console.log('List is empty')
      return
    }

    console.log(`size of the list: ${this.size}`)

    while (currentNode) {
      console.log(`Node:${count} | Value: ${currentNode.value}`)
      currentNode = currentNode.next
      count++
    }
  }
}

const linkedList = new LinkedList()

linkedList.insertFirst(1)
linkedList.insertLast(2)
linkedList.insertLast(3)
linkedList.insertLast(4)
linkedList.insertLast(5)
linkedList.insertLast(6)
// console.log(linkedList.find(1))
// console.log(linkedList.find(5))
// console.log(linkedList.find(4))

linkedList.printList()
/*
=>
size of the list: 1
Node:1 | Value: 1
Node:2 | Value: 2
Node:3 | Value: 3
Node:4 | Value: 4
Node:5 | Value: 5
Node:6 | Value: 6
*/

linkedList.reverseList()
linkedList.printList()
/*
=>
size of the list: 6
Node:1 | Value: 6
Node:2 | Value: 5
Node:3 | Value: 4
Node:4 | Value: 3
Node:5 | Value: 2
Node:6 | Value: 1
*/
