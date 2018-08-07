class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }
  
  pop() {
    return this.stack.pop();
  }

  viewTop() {
    return this.stack[this.stack.length - 1];
  }
}

let stack = new Stack();
stack.push(10);
let top = stack.pop();
console.log(top);
stack.push(16);
console.log(stack.viewTop());

