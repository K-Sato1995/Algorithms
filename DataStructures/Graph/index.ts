// https://adrianmejia.com/data-structures-for-beginners-graphs-time-complexity-tutorial/#Adjacency-List-Graph-OO-Implementation

/*
READ THIS AND IMPLEMENT THE GRAPH BELOW

https://adrianmejia.com/data-structures-for-beginners-graphs-time-complexity-tutorial/#Adjacency-List-Graph-OO-Implementation
*/

// 隣接リスト(Adjaceny List)によるグラフの実装方法
class GraphNode {
  value: number
  adjacents: GraphNode[]

  constructor(value: number) {
    this.value = value
    this.adjacents = []
  }

  addAdjacent(node: GraphNode) {
    this.adjacents.push(node)
  }

  getAdjacents() {
    return this.adjacents
  }
}

type GraphDirection = 'Directed' | 'Undirected'

class Graph {
  nodes: Map<number, GraphNode[]>
  edgeDirection: GraphDirection

  constructor(edgeDirection: GraphDirection) {
    this.nodes = new Map()
    this.edgeDirection = edgeDirection
  }
}
