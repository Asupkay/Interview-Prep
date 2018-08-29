const fib = (index) => {
  if(index == 0 || index == 1) {
    return index;
  }

  let first = 0;
  let second = 1;

  for(let i = 1; i < index; i++) {
    let next = first + second;
    first = second;
    second = next;        
  }

  return second;
}

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
