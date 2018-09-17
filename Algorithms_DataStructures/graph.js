//Graph using adjacency list

class Graph {
  constructor() {
    this.edges = {};
  }

  addEdge(src, destination) {
    if(this.edges[destination] && this.edges[src]) {
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

  breathFirstSearch(s) {
    let visited = [];
    let queue = [];
    for(let i = 0; i < Object.keys(graph.edges).length; i++) {
      visited.push(false);
    } 
    queue.push(s);
    visited[s] = true;
    while(queue.length > 0) {
      let s = queue.shift();
      this.edges[s].forEach((node) => {
        if(visited[node] == false) {
          queue.push(node);
          visited[parseInt(node)] = true
        }
      });
    }
    console.log(visited);
  }

  DFSUtil(v, visited) {
    visited[v] = true;
    console.log(v);

    this.edges[v].forEach((node) => {
      if(visited[node] == false) {
        this.DFSUtil(node, visited);
      }
    });
  }

  depthFirstSearch(v) {
    let visited = [];
    for(let i = 0; i < Object.keys(graph.edges).length; i++) {
      visited.push(false);
    }
    this.DFSUtil(v, visited);
    console.log(visited);
  }
}



const depthFirstSearch = (graph) => {

}

let graph = new Graph();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addEdge(0,1);
graph.addEdge(0,2);
graph.addEdge(1,2);
graph.addEdge(2,0);
graph.addEdge(2,3);
graph.addEdge(3,3);
console.log(graph.edges);
try {
  graph.addEdge(1,3);
} catch(e) {
  console.log("caught");
}
graph.breathFirstSearch(2);
graph.depthFirstSearch(2);
