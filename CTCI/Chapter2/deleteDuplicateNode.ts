import { LinkedList, ListNode } from './linkedList'

// TODO: needs to be fixed
const deleteDupNode = (head: ListNode) => {
  let currentNode: ListNode | null = head
  let previousNode: ListNode | null = null
  const uniqueValues: number[] = []

  while (currentNode) {
    if (uniqueValues.includes(currentNode.value)) {
      // probably something is wrong around here.
      if (previousNode == null) return
      previousNode.next = currentNode.next
    } else {
      uniqueValues.push(currentNode.value)
      previousNode = currentNode
    }

    currentNode = currentNode.next
  }
}

export { deleteDupNode }
