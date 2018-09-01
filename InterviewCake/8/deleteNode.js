class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const deleteNode = (node) => {
  if(node.next) {
    node.value = node.next.value;
    node.next = node.next.next;
  } else {
    node = null;
  }
}

const a = new LinkedListNode('A');
const b = new LinkedListNode('B');
const c = new LinkedListNode('C');

a.next = b;
b.next = c;

deleteNode(b);
