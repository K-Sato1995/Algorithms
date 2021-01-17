/*
READ THIS AND IMPLEMENT THE GRAPH BELOW

https://adrianmejia.com/data-structures-for-beginners-graphs-time-complexity-tutorial
*/

// 隣接リスト(Adjaceny List)によるグラフの実装方法
/*
{
    1: [2, 4],
    2: [1, 3]
}
*/

class Graph {
  nodes: { [key: number]: number[] }

  constructor() {
    this.nodes = {}
  }

  // Add new Node
  addNode(node: number) {
    // nodeがHashMapに存在しない場合はHashMapに空の配列と共に追加
    if (!this.nodes[node]) {
      this.nodes[node] = []
    }
  }

  addEdge(source: number, destination: number) {
    // sourceがnodesに存在しない場合は新しいnodeとして追加
    if (!this.nodes[source]) {
      this.addNode(source)
    }

    // destinationがnodesに存在しない場合は新しいnodeとして追加
    if (!this.nodes[destination]) {
      this.addNode(destination)
    }

    /*
        sourceとdesitinationが既に存在する場合、2つを繋ぐedgeを追加するため、
        両方にそれぞれを付け加える
    */
    this.nodes[source].push(destination)
    this.nodes[destination].push(source)
  }

  removeEdge(source: number, destination: number) {
    /*
        Sourceのadjacentsにdestinationを抜いたものをセットする
     */
    this.nodes[source] = this.nodes[source].filter(
      (node: number) => node !== destination,
    )
    this.nodes[destination] = this.nodes[destination].filter(
      (node: number) => node !== source,
    )
  }

  removeNode(node: number) {
    /*
      取り除きたいnodeと他のnodeとの結びつきを消す
    */
    while (this.nodes[node]) {
      const adjacentNode = this.nodes[node].pop()
      if (adjacentNode) this.removeEdge(node, adjacentNode)
    }
    /*
      取り除きたいnodeを削除する
    */
    delete this.nodes[node]
  }

  depthFirstSearch(firstNode: number): number[] {
    // 全てのnodeをresultに保管して、最後に返す
    const result = []
    const stack = [firstNode]
    // アクセスしたnodeはこのHashMapに入れておく
    const visited: { [key: number]: boolean } = {}

    visited[firstNode] = true

    let currentNode

    while (stack.length) {
      currentNode = stack.pop() as number
      // nodeを1つずつresultに保管していく
      result.push(currentNode)

      // depthで探索するので、現在のnodeに結びつくnodeを全て探索する
      this.nodes[currentNode].forEach((adjacentNode: number) => {
        // 既にvisitedに登録されていない場合
        if (!visited[adjacentNode]) {
          visited[adjacentNode] = true
          stack.push(adjacentNode)
        }
      })
    }

    return result
  }

  breadthFirstSearch(firstNode: number): number[] {
    // 全てのnodeをresultに保管して、最後に返す
    const result = []
    const queue = [firstNode]

    // アクセスしたnodeはこのHashMapに入れておく
    const visited: { [key: number]: boolean } = {}

    visited[firstNode] = true

    let currentNode

    while (queue.length) {
      currentNode = queue.shift() as number
      // nodeを1つずつresultに保管していく
      result.push(currentNode)
      this.nodes[currentNode].forEach((adjacentNode: number) => {
        if (!visited[adjacentNode]) {
          visited[adjacentNode] = true
          queue.push(adjacentNode)
        }
      })
    }

    return result
  }
}

const graph = new Graph()

graph.addNode(1)
graph.addNode(2)
graph.addNode(3)
graph.addNode(4)
graph.addNode(5)
graph.addNode(6)

graph.addEdge(1, 2)
graph.addEdge(2, 3)
graph.addEdge(2, 5)
graph.addEdge(3, 4)
graph.addEdge(5, 6)

console.log(graph)

/*
Graph {
  nodes: {
    '1': [ 2 ],
    '2': [ 1, 3, 5 ],
    '3': [ 2, 4 ],
    '4': [ 3 ],
    '5': [ 2, 6 ],
    '6': [ 5 ]
  }
}
*/

/*
  上記は下記のようなグラフを表している
  1 
  |
  2
 / \
3   5
|   |
4   6
*/

console.log(`DepthFirstSearch: ${graph.depthFirstSearch(1)}`)
//=> [ 1, 2, 5, 6, 3, 4 ]

console.log(`BreadthFirstSearch: ${graph.breadthFirstSearch(1)}`)
//=> [ 1, 2, 3, 5, 4, 6 ]
/*
Adjacency matrix graph ts implementation
https://github.com/CraigHarley/SimpleGraphJS/blob/master/Graph.ts
*/
