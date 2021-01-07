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

  while (currentNode.next !== undefined) {
    currentNode = currentNode.next
    count++
  }

  return count
}

// Append a new node to the end of the list
const append = (head: ListNode, value: number): ListNode => {
  const newNode = new ListNode(value)
  let currentNode = head

  while (currentNode.next !== undefined) {
    currentNode = currentNode.next
  }

  return (currentNode.next = newNode)
}

// Add a node to the beggining of the list
const push = (head: ListNode, value: number): ListNode => {
  const newNode = new ListNode(value)
  newNode.next = head

  return newNode
}

// Delte a node at the given position
const deleteNode = (head: ListNode | undefined, key: number) => {
  let currentNode = head

  if (currentNode === null) return

  if (currentNode?.value === key) {
    currentNode = currentNode.next
  }

  while (currentNode?.next !== undefined) {
    if (currentNode.next.value === key) {
      currentNode.next = currentNode.next.next
    }
  }
}

// Reversing a Linked List: Easy as 1, 2, 3
// https://medium.com/outco/reversing-a-linked-list-easy-as-1-2-3-560fbffe2088
// we just need two variables, let’s call them previous, current. And all we’re doing is taking current.next (which is represented by the arrow) and setting it equal to previous.
const reverseList = (head: ListNode) => {
  // a -> b -> c -> d
  // d -> c -> b -> a
  let currentNode: ListNode | undefined = head
  let prevNode: ListNode | undefined
  let following: ListNode | undefined = head

  // 最後のnodeがnull(undefined)に到達するまで回す
  while (currentNode !== undefined) {
    // 現在のNodeが元々指していた物を一時的に保持する
    following = currentNode.next
    // 現在のNodeが次に指すべき物をここで設置する
    // (a -> bならReverseした際にb -> aにする)
    currentNode.next = prevNode
    // 次のNodeに移動する為にPrevにCurrentNodeをセットする
    prevNode = currentNode
    // 次のNodeに移動する為にCurrentNodeにFollowingをセットする
    currentNode = following
  }

  return prevNode
}

const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)
const node4 = new ListNode(4)

node1.next = node2
node2.next = node3
node3.next = node4

// console.log(countNode(node1)) //=> 4
export { ListNode, append, push, countNode, deleteNode, reverseList }
