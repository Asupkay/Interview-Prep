class LinkedList {
  constructor() {
    this.head = null;
  }

  reverse() {
    let currentNode = this.head;
    let previousNode = null;
    let nextNode = null
    while(currentNode) {
      nextNode = currentNode.next;
      
      currentNode.next = previousNode;

      previousNode = currentNode;
      currentNode = nextNode;
    }
    this.head = previousNode;
    return previousNode;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let ll = new LinkedList();
ll.head = new Node(10);
ll.head.next = new Node(12);
ll.head.next.next = new Node(13);
ll.head.next.next.next = new Node(13);
ll.head.next.next.next.next = new Node(26);
ll.head.next.next.next.next.next = new Node(32);
ll.head.next.next.next.next.next.next = new Node(5);
console.log(JSON.stringify(ll.reverse()));
