class Queue {
  constructor() {
    this.queue = []
  }

  enqueue(element) {
    this.queue.unshift(element);
  }

  dequeue() {
    return this.queue.pop();
  }

  viewTop() {
    return this.queue[this.queue.length - 1];
  }
}

let queue = new Queue();
queue.enqueue(10);
let e = queue.dequeue();
console.log(e)
queue.enqueue(16);
console.log(queue.viewTop());
