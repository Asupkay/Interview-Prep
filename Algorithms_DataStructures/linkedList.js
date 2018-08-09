class LinkedList {
  constructor() {
    this.head = null
  }

  addNode(value) {
    if(this.head == null) {
      this.head = new Node(value);
    } else {
      let cNode = this.head
      while(cNode.next != null) {
        cNode = cNode.next;
      }
      cNode.next = new Node(value);
    }
  }

  findNode(value) {
    if(this.head == null) {
      return this.head
    } else {
      let cNode = this.head;
      while(cNode != null) {
        if(cNode.value == value) {
          return cNode;
        }
        cNode = cNode.next;
      }
      return cNode;
    }
  }

  deleteNode(value) {
    if(this.head == null) {
      return this.head;
    } 

    let prevNode = null;
    let cNode = this.head;
    while(cNode != null) {
      if(cNode.value == value) {
        prevNode.next = cNode.next;
        cNode = null;
      } else {
        prevNode = cNode;
        cNode = cNode.next;
      }
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(4);
console.log(linkedList);
console.log(linkedList.findNode(-1));
console.log(linkedList.findNode(3));
linkedList.deleteNode(3);
console.log(JSON.stringify(linkedList))
