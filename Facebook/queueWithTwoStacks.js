class Queue {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  enqueue(val) {
    this.inStack.push(val);
  }

  dequeue() {
    if(this.outStack.length === 0) {
      while(this.inStack.length !== 0) {
        this.outStack.push(this.inStack.pop());
      }
      
      if(this.outStack.length === 0) {
        return null;
      }
    }
    return this.outStack.pop();
  }
}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(9);
queue.enqueue(8);
queue.enqueue(7);
queue.enqueue(6);
console.log(queue.dequeue());
