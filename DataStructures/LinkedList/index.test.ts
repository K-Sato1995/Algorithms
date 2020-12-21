import { ListNode, append, countNode, push } from "./index"

describe("countNode", () => {
    const node1 = new ListNode(1)
    const node2 = new ListNode(2)
    const node3 = new ListNode(3)
    const node4 = new ListNode(4)
    
    node1.next = node2
    node2.next = node3
    node3.next = node4

    it("retuns the number of the nodes that list has from the given node", () => {
        expect(countNode(node1)).toBe(4)
    })

    it("retuns the number of the nodes that list has from the given node", () => {
        expect(countNode(node2)).toBe(3)
    })
})


describe("append", () => {
    const node1 = new ListNode(1)
    const node2 = new ListNode(2)
    const node3 = new ListNode(3)
    const node4 = new ListNode(4)

    node1.next = node2
    node2.next = node3
    node3.next = node4

    it("appends a new node", () => {
        append(node1, 100)
        expect(node4.next?.value).toEqual(100)
    })

    it("appends a new node", () => {
        append(node1, 200)
        expect(node4.next?.next?.value).toEqual(200)
    })
})