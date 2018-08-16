class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const knthToLast = (numToLast, head) => {
  let trailNode = head;
  let headNode = head;
  for(let i = 0; i < numToLast; i++) {
    if(!headNode) {
      return null;
    }
    headNode = headNode.next;
  }
  while(headNode) {
    trailNode = trailNode.next;
    headNode = headNode.next;
  }
  return trailNode;
}

const a = new LinkedListNode('Angel Food');
const b = new LinkedListNode('Bundt');
const c = new LinkedListNode('Cheese');
const d = new LinkedListNode("Devil's Food");
const e = new LinkedListNode('Eccles');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(knthToLast(10, a));
