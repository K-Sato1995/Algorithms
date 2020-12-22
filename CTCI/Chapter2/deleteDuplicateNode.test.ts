import { ListNode, LinkedList } from "./deleteDuplicateNode"

describe("DeleteDuplicateNode", () => {
    const linkedList = new LinkedList()
    linkedList.insertFirst(1)
    linkedList.insertFirst(2)
    linkedList.insertFirst(3)
    linkedList.insertFirst(4)

    it("replaces empty spaces with %20", () => {
        linkedList.printList()
        expect(1).toEqual("Mr%20John%20Smith")
    })

})
