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
}

const graph = new Graph()

graph.addNode(1)
graph.addNode(2)
graph.addNode(3)

graph.addEdge(1, 2)
graph.addEdge(2, 3)

console.log(graph)

/*
Graph { 
    nodes: { 
        '1': [ 2 ], 
        '2': [ 1, 3 ], 
        '3': [ 2 ] } 
    }
}
*/

/*
Adjacency matrix graph ts implementation
https://github.com/CraigHarley/SimpleGraphJS/blob/master/Graph.ts
*/
