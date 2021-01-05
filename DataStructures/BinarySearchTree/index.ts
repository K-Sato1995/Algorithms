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
        if(!this.root) {
            this.root = newNode
            return this
        } else {
            let current = this.root
            while(true) {
                // if the new value is less than the current node's value, go left
                if(value < current.value) {
                    if(!current.left) {
                        current.left = newNode
                        return this
                    } else {
                        current = current.left
                    }
                // if the new value is greater than the current node's value, go right
                } else if(value > current.value) {
                    if(!current.right) {
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

    find(value: number) {
        // if tree is not there yet, just returns false
        if(!this.root) return false

        let current: BSTNode | null = this.root
        let isFound = false

        while(current && !isFound) {
            // if the value is smaller thatn than the current node's value, go left
            if(value < current.value) {
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


let tree = new BinarySearchTree();
tree.add(10);
tree.add(4);
tree.add(4);
tree.add(12);
tree.add(2);
console.log(tree);

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