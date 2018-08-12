class LinkedList {
  constructor() {
    this.head = null;
  }

  reverse() {
    if(this.head == null || this.head.next == null) {
      return this.head;
    } 
    let prevNode = this.head;
    let cNode = this.head.next;
    let nextNode = this.head.next.next;
    prevNode.next = null;
    while(cNode != null) {
      cNode.next = prevNode;
      prevNode = cNode;
      cNode = nextNode;
      if(nextNode != null) {
        nextNode = nextNode.next;
      }
    }
    this.head = prevNode;
    console.log(JSON.stringify(this.head));
    return this.head;
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
ll.reverse();
