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

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(adjacentVertex, vertex);
    }

    delete this.adjacencyList[vertex];
  }
}

const graph = new Graph();
graph.addVertex("Tokyo");
graph.addVertex("Dallas");
graph.addVertex("Aspen");
graph.addVertex("Hong Kong");
graph.addVertex("Los Angeles");
graph.addEdge("Tokyo", "Dallas");
graph.addEdge("Dallas", "Aspen");
graph.addEdge("Hong Kong", "Tokyo");
graph.addEdge("Dallas", "Hong Kong");
graph.addEdge("Dallas", "Los Angeles");
graph.addEdge("Hong Kong", "Los Angeles");
console.log(graph);
graph.removeVertex("Hong Kong");
console.log(graph);
// graph.removeEdge("Tokyo", "Dallas");
// console.log(graph);
