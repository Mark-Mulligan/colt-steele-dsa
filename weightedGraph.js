class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
}

const graph = new WeightedGraph();

graph.addVertex("a");
graph.addVertex("b");
graph.addVertex("c");

graph.addEdge("a", "b", 9);
graph.addEdge("a", "c", 5);
graph.addEdge("b", "c", 7);

console.log(graph.adjacencyList);
