// https://adrianmejia.com/data-structures-for-beginners-trees-binary-search-tree-tutorial/

class TreeNode {
  value: number | null
  descendents: TreeNode[]

  constructor(value: number) {
    this.value = value
    this.descendents = []
  }
}

const treeNode1 = new TreeNode(1)
const treeNode2 = new TreeNode(2)
const treeNode3 = new TreeNode(3)
const treeNode4 = new TreeNode(4)
const treeNode5 = new TreeNode(5)

treeNode1.descendents.push(treeNode2)
treeNode2.descendents.push(treeNode3, treeNode4, treeNode5)
// This is what it looks like now
//      treeNode1
//        ↓
//      treeNode2
//  ↙︎　　　↓     ↘︎
// treeNode3 treeNode4 treeNode5

// console.log(treeNode1)
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
