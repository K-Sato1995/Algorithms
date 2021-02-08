class BSTNode {
  value: number
  right: BSTNode | null
  left: BSTNode | null

  constructor(value: number) {
    this.value = value
    this.right = null
    this.left = null
  }
}

class BinarySearchTree {
  root: BSTNode | null

  constructor() {
    this.root = null
  }

  add(value: number) {
    const newNode = new BSTNode(value)

    // Set the new node as the root if there is no tree yet
    if (!this.root) {
      this.root = newNode
      return this
    } else {
      let current = this.root
      while (true) {
        // if the new value is less than the current node's value, go left
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode
            return this
          } else {
            current = current.left
          }
          // if the new value is greater than the current node's value, go right
        } else if (value > current.value) {
          if (!current.right) {
            current.right = newNode
            return this
          } else {
            current = current.right
          }
          //if the new value is equal to the current one, just ignore
        } else {
          return this
        }
      }
    }
  }

  remove(value: number) {
    /*　When you want to remove the root value,  Move the leftmost value of the right sub tree to the root.　*/
  }

  find(value: number) {
    // if tree is not there yet, just returns false
    if (!this.root) return false

    let current: BSTNode | null = this.root
    let isFound = false

    while (current && !isFound) {
      // if the value is smaller thatn than the current node's value, go left
      if (value < current.value) {
        current = current.left
        //if the value is greater than the current node's, go right
      } else if (value > current.value) {
        current = current.right
        // if values are equal, found it!
      } else {
        isFound = true
      }
    }

    return isFound
  }
}

const preorder = (root: BSTNode | null) => {
  if (!root) {
    return 'The tree is empty'
  } else {
    console.log(root.value)
    preorder(root.left)
    preorder(root.right)
  }
}

const inorder = (root: BSTNode | null) => {
  if (!root) {
    return 'The tree is empty'
  } else {
    inorder(root.left)
    console.log(root.value)
    inorder(root.right)
  }
}

const postorder = (root: BSTNode | null) => {
  if (!root) {
    return 'The tree is empty'
  } else {
    postorder(root.left)
    postorder(root.right)
    console.log(root.value)
  }
}

function invertBinaryTree(tree: BinaryTree | null) {
  if (tree !== null) {
    const tmp = tree.left
    tree.left = tree.right
    tree.right = tmp

    invertBinaryTree(tree.left)
    invertBinaryTree(tree.right)
  }

  return tree
}

const tree = new BinarySearchTree()
tree.add(10)
tree.add(4)
tree.add(12)
tree.add(2)
console.log(tree)

/*
 BinarySearchTree: {
  "root": {
    "value": 10,
    "right": {
      "value": 12,
      "right": null,
      "left": null
    },
    "left": {
      "value": 4,
      "right": null,
      "left": {
        "value": 2,
        "right": null,
        "left": null
      }
    }
  }
}
*/

console.log(tree.find(4)) //=> true
console.log(tree.find(12)) //=> true
console.log(tree.find(3)) //=> false

tree.add(3)
tree.add(13)
tree.add(14)
console.log('-------Preorder-----------')
preorder(tree.root)
console.log('-------------------------')
/*
preorder
10
4
2
3
12
13
14
*/

console.log('-------Inorder-----------')
inorder(tree.root)
console.log('-------------------------')
/*
inorder
2
3
4
10
12
13
14
*/

console.log('-------Postorder-----------')
postorder(tree.root)
console.log('-------------------------')

/*
3
2
4
14
13
12
10
*/
