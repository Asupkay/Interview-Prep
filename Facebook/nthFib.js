const initializeNthFib = () => {
  let mem = [0, 1];
  const nthFib = (val) => {
    if(mem[val] != undefined) {
      return mem[val];
    } else {
      let fib = nthFib(val - 1) + nthFib(val-2);
      mem[val] = fib;
      return fib;
    }
  }
  return nthFib;
}

const bottomUpFib = (val) => {
  if(val == 0 || val == 1) {
    return val;
  }

  let prevPrev = 0;
  let prev = 1;
  let current;
  for(let i = 0; i < val - 1; i++) {
    current = prevPrev + prev;
    prevPrev = prev;
    prev = current;
  }
  return current;
}

let fibFinder = initializeNthFib();
console.log(fibFinder(4));
console.log(bottomUpFib(4));
