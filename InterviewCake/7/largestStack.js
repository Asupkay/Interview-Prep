class Stack {
  constructor() {
    // Initialize an empty array
    this.items = [];
    this.maxStack = [];
  }
    
  // Push a new item to the last index
  push(item) {
    this.items.push(item);
    if(!this.maxStack[this.maxStack.length - 1] || item > this.maxStack[this.maxStack.length - 1]) {
      this.maxStack.push(item);
    }
  }
  
  // Remove the last item
  pop() {
    // If the stack is empty, return null
    // (It would also be reasonable to throw an exception)
    if (!this.items.length) {
      return null;
    }
    let popped = this.items.pop();
    if(this.maxStack[this.maxStack.length - 1] == popped) {
      this.maxStack.pop();
    }
    return popped;
  }
  
  // See what the last item is
  peek() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  getMax() {
    return this.maxStack[this.maxStack.length - 1];
  }
}

let stack = new Stack();
console.log(stack.getMax());
stack.push(1);
console.log(stack.getMax());
