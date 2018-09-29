class binaryMinHeap {
  constructor() {
    //Overall the heap is an array
    this.heap = [];
  } 

  addValue(value) {
    //When you add a value if the array is empty add it to the front
    if(this.heap.length == 0) {
      this.heap.push(value)
    } else {
      //Put the value onto the end of the heap and save the actual position (not index)
      let position = this.heap.length + 1;
      this.heap.push(value);
      //While its parents is more than the value and it isn't at the first position
      while(this.heap[Math.floor(position/2) - 1] > value && position > 1) {
        console.log(position);
        //Put the current value into temp and swap it with its parent
        let temp = this.heap[position - 1];
        this.heap[position - 1] = this.heap[Math.floor(position/2) - 1];
        this.heap[Math.floor(position/2) - 1] = temp;
        //Switch position to the parent
        position = Math.floor(position/2);
      }
    }
  }

  deleteValue(value) {
    //Find the index of the value that needs to be deleted
    let index = -1;
    for(let i = 0; i < this.heap.length; i++){
      if(this.heap[i] == value) {
        index = i;
        break;
      }
    }
    if(index == -1) {
      return index;
    }

    //Replace the index with the value at the end of the heap
    this.heap[index] = this.heap.pop();
    //Same the value of the newest node
    let newNode = this.heap[index];
    let position = index + 1;
    //While the parent is more than the node move it up
    while(position > 1 && (this.heap[Math.floor(position/2) -1] > newNode)){
      console.log("here1");
      let temp = this.heap[position - 1];
      this.heap[position - 1] = this.heap[Math.floor(position/2) - 1];
      this.heap[Math.floor(position/2) - 1] = temp;
      position = Math.floor(position/2);
    }

    //While the child is less than the current spot switch
    while((this.heap[position*2 - 1] < newNode && this.heap[position*2 - 1] != null) || (this.heap[position*2] < newNode && this.heap[position*2 - 1] != null)) {
      console.log(this.heap);
      console.log("here2 " + position);
      if(this.heap[position*2 - 1] < newNode && this.heap[position*2 - 1] != null) {
        let temp = this.heap[position -1];
        this.heap[position - 1] = this.heap[position*2 - 1];
        this.heap[position*2 - 1] = temp;
        position = position * 2;
      } else {
        let temp = this.heap[position -1];
        this.heap[position - 1] = this.heap[position*2];
        this.heap[position*2] = temp;
        position = position *  2 + 1;
      }
      console.log(this.heap);
    }
  }
}

let bHeap = new binaryMinHeap();
bHeap.addValue(1);
console.log(bHeap.heap)
bHeap.addValue(9);
console.log(bHeap.heap)
bHeap.addValue(22);
console.log(bHeap.heap)
bHeap.addValue(17);
console.log(bHeap.heap)
bHeap.addValue(11);
console.log(bHeap.heap)
bHeap.addValue(33);
bHeap.addValue(27);
bHeap.addValue(21);
bHeap.addValue(19);
console.log(bHeap.heap)
bHeap.deleteValue(33);
console.log(bHeap.heap)
bHeap.deleteValue(22);
console.log(bHeap.heap)
bHeap.deleteValue(1);
console.log(bHeap.heap)
