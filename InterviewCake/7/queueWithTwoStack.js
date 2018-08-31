class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    if(this.stack2.length == 0) {
      while(this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }

      if (this.stack2.length === 0) {
        throw new Error("Can't dequeue from empty queue!");
      }
    }
    
    return this.stack2.pop();
  }
}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(9);
queue.enqueue(8);
queue.enqueue(7);
console.log(queue.dequeue());
