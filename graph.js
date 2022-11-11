class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((edge) => edge !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((edge) => edge !== v1);
  }
}

const graph = new Graph();
graph.addVertex("Tokyo");
graph.addVertex("Dallas");
graph.addVertex("Aspen");
graph.addEdge("Tokyo", "Dallas");
console.log(graph);
graph.removeEdge("Tokyo", "Dallas");
console.log(graph);
