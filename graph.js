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

  DFSRecursive(vertex) {
    const resultList = [];
    const visited = {};

    const findNodes = (vertex) => {
      if (!vertex) return null;
      visited[vertex] = true;
      resultList.push(vertex);

      for (let i = 0; i < this.adjacencyList[vertex].length; i++) {
        let currentVertex = this.adjacencyList[vertex][i];
        if (!visited[currentVertex]) {
          findNodes(currentVertex);
        }
      }
    };

    findNodes(vertex);
    return resultList;
  }

  DFSIterative(vertex) {
    const stack = [vertex];
    const resultList = [];
    const visited = {};
    let currentVertex;
    visited[vertex] = true;

    while (stack.length) {
      currentVertex = stack.pop();
      resultList.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return resultList;
  }

  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);

    return result;
  }

  BFS(vertex) {
    const queue = [vertex];
    const result = [];
    const visited = {};
    visited[vertex] = true;
    let currentVertex;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log(graph.BFS("A"));

console.log(graph);
