const LEFT = 0 
const RIGHT = 1

class BinarySearchTreeNode {
    value: number 
    // BSTなので、decendantsには最大2個までしか入らない
    descendents: BinarySearchTreeNode[]
    parent: BinarySearchTreeNode | null

    constructor(value: number) {
        this.value = value
        this.descendents = []
        this.parent = null
    }

    get left() {
        return this.descendents[LEFT]
    }

    set left(node: BinarySearchTreeNode) {
        this.descendents[LEFT] = node
        if(node){
            node.parent = this
        }
    }

    get right() {
        return this.descendents[RIGHT]
    }

    set right(node: BinarySearchTreeNode) {
        this.descendents[RIGHT] = node
        if(node) {
            node.parent = this
        }
    }
}

class BinarySearchTree {
    root: BinarySearchTreeNode | null
    size: number

    constructor() {
        this.root = null
        this.size = 0
    }
    // BSTに要素を追加する方法
    // (1) If a tree is empty, the first node becomes the root, and you are done.
    // (2) Compare root/parent’s value if it’s higher go right, if it’s lower go left. If it’s the same, then the value already exists so that you can increase the duplicate count (multiplicity).
    // (3) Repeat #2 until we found an empty slot to insert the new node.
    add(value: number) {
        const newNode = new BinarySearchTreeNode(value)
        if(this.root) {
            // const { found, }
        }
    }
 }