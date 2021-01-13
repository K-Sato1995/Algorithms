/*
READ THIS AND IMPLEMENT THE GRAPH BELOW

https://adrianmejia.com/data-structures-for-beginners-graphs-time-complexity-tutorial
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

  removeAdjacent(node: GraphNode) {
    const index = this.adjacents.indexOf(node)
    if (index > -1) {
      this.adjacents.splice(index, 1)
      return node
    }
  }

  getAdjacents() {
    return this.adjacents
  }
}

type GraphDirection = 'Directed' | 'Undirected'

class Graph {
  nodes: Map<GraphNode, GraphNode[]>
  edgeDirection: GraphDirection

  constructor(edgeDirection: GraphDirection) {
    this.nodes = new Map()
    this.edgeDirection = edgeDirection
  }

  //   addEdge(source, destination: GraphNode) {}

  addVertex(value: number) {
    if (this.nodes.has(value)) {
      return this.nodes.get(value)
    } else {
      const vertex = new GraphNode(value)
      this.nodes.set(value, vertex)
      return vertex
    }
  }
}

const graph = new Graph('Directed')

/*
Adjacency matrix graph ts implementation
https://github.com/CraigHarley/SimpleGraphJS/blob/master/Graph.ts
*/
