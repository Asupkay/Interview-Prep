class binaryMinHeap {
  constructor() {
    this.heap = [];
  } 

  addValue(value) {
    if(this.heap.length == 0) {
      this.heap.push(value)
    } else {
      let position = this.heap.length + 1;
      this.heap.push(value);
      while(this.heap[Math.floor(position/2) - 1] > value && position > 1) {
        console.log(position);
        let temp = this.heap[position - 1];
        this.heap[position - 1] = this.heap[Math.floor(position/2) - 1];
        this.heap[Math.floor(position/2) - 1] = temp;
        position = Math.floor(position/2);
      }
    }
  }

  deleteValue(value) {
    
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

    this.heap[index] = this.heap.pop();
    let newNode = this.heap[index];
    let position = index + 1;
    while(position > 1 && (this.heap[Math.floor(position/2) -1] > newNode)){
      console.log("here1");
      let temp = this.heap[position - 1];
      this.heap[position - 1] = this.heap[Math.floor(position/2) - 1];
      this.heap[Math.floor(position/2) - 1] = temp;
      position = Math.floor(position/2);
    }

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
