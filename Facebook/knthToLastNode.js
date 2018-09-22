class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const knthToLast = (numToLast, head) => {
  //Base node
  let trailNode = head;
  //Node that sits ahead
  let headNode = head;
  for(let i = 0; i < numToLast; i++) {
    //If you run into the end return null
    if(!headNode) {
      return null;
    }
    //Move it forward
    headNode = headNode.next;
  }
  //While the head node is not at the end
  while(headNode) {
    trailNode = trailNode.next;
    headNode = headNode.next;
  }
  //Return the follower node
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
