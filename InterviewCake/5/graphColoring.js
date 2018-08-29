class GraphNode {
  constructor(label) {
    this.label = label;
    this.neighbors = new Set();
    this.color = null;
  }
}

var a = new GraphNode("a");
var b = new GraphNode("b");
var c = new GraphNode("c");

a.neighbors.add(b);
b.neighbors.add(a);
c.neighbors.add(b);
b.neighbors.add(c);

var graph = [a, b, c];

const colorGraph = (graph, colors) => {
  graph.forEach((node) => {
    let illegalColors = new Set();
    
    node.neighbors.forEach((neighbor) => {
      if(neighbor.color) {
        illegalColors.add(neighbor.color);
      }
    });

    for(let i = 0; i < colors.length; i++) {
      let color = colors[i];

      if(!illegalColors.has(color)) {
        node.color = color;
        break;
      }
    }
  });
}

colorGraph(graph, ['yellow', 'green', 'blue']);
console.log(graph);
