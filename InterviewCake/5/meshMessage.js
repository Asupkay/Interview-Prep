const shortestRoute = (sender, receive, network) => {
  let queue = [];
  queue.unshift(sender);

  let alreadyVisited = new Set();
  let visitGraph = {};
  while(queue.length > 0) {
    let current = queue.pop();

    if(current === receive) {
      return constructPath(sender, receive, visitGraph);
      break;
    }

    network[current].forEach((neighbor) => {
      if(!visitGraph[neighbor]) {
        alreadyVisited.add(neighbor);
        queue.unshift(neighbor);

        visitGraph[neighbor] = current;
      }
    });
  } 

  return -1;
};

const constructPath = (sender, receive, visitGraph) => {
  let path = [];
  let current = receive;
  while(current != sender) {
    path.push(current);
    current = visitGraph[current];
  }
  path.push(sender);
  return path;
}

var network = {
  'Min'     : ['William', 'Jayden'],
  'William' : ['Min', 'Noam'],
  'Jayden'  : ['Min', 'Amelia', 'Ren', 'Noam'],
  'Ren'     : ['Jayden'],
  'Amelia'  : ['Jayden', 'Adam', 'Miguel'],
  'Adam'    : ['Amelia', 'Miguel'],
  'Miguel'  : ['Amelia', 'Adam'],
  'Noam'    : ['Jayden', 'William'],
  'Omar'    : ['Ren', 'Min', 'Scott'],
};

console.log(shortestRoute('Jayden', 'Omar', network));
