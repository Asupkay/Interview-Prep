class Graph {
  constructor() {
    this.edges = {};
  }

  addEdge(src, destination) {
    if(this.edges[destination] && this.edges[src]) {
      this.edges[destination].push(src);
      this.edges[src].push(destination);
    } else {
      throw new Error('SRC or destination does not exist'); 
    }
  }

  addVertex(vertex) {
    if(this.edges[vertex]) {
      throw new Error('Vertex already exists');
    }

    this.edges[vertex] = [];
  }
}

let graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addEdge(1,2);
console.log(graph.edges);
try {
  graph.addEdge(1,3);
} catch(e) {
  console.log("caught");
}
