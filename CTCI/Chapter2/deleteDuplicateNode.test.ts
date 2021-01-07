import { LinkedList, ListNode } from './linkedList'
import { deleteDupNode } from './deleteDuplicateNode'

describe('deleteDupNode', () => {
  const linkedList = new LinkedList()
  linkedList.insertFirst(1)
  linkedList.insertFirst(2)
  linkedList.insertFirst(3)
  linkedList.insertFirst(5)
  linkedList.insertFirst(5)

  it('removes the same values', () => {
    deleteDupNode(linkedList.head as ListNode)
    expect(linkedList.size).toEqual(4)
  })
})
