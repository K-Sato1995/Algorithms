// https://adrianmejia.com/data-structures-for-beginners-trees-binary-search-tree-tutorial/

class TreeNode {
  value: number | null
  descendents: TreeNode[]

  constructor(value: number) {
    this.value = value
    this.descendents = []
  }
}

const node1 = new TreeNode(1)
const node2 = new TreeNode(2)
const node3 = new TreeNode(3)
const node4 = new TreeNode(4)
const node5 = new TreeNode(5)

node1.descendents.push(node2)
node2.descendents.push(node3, node4, node5)
// This is what it looks like now
//      node1
//        ↓
//      node2
//  ↙︎　　　↓     ↘︎
// node3 node4 node5

// console.log(node1)
// =>
// TreeNode: {
//     "value": 1,
//     "descendents": [
//       {
//         "value": 2,
//         "descendents": [
//           {
//             "value": 3,
//             "descendents": []
//           },
//           {
//             "value": 4,
//             "descendents": []
//           },
//           {
//             "value": 5,
//             "descendents": []
//           }
//         ]
//       }
//     ]
//   }
