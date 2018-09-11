const helper = (array, memo, k) => {
  if(k === 0) {
    return 1;
  }

  let s = array.length - k;
  if(array[s] === "0") {
    return 0;
  }

  if(memo[k] != null) {
    return memo[k];
  }

  let result = helper(array, memo, k - 1);
  let result2 = 0;
  if(k >= 2 && parseInt(array[s] + array[s+1]) < 27) {
     result2 = helper(array, memo, k - 2); 
  } 
  memo[k] = result + result2;
  return result + result2;
}

const numDecodeMessage = (array) => {
  let memo = new Array(array.length + 1).fill(null);
  return helper(array, memo, array.length);
}

console.log(numDecodeMessage("273264"));

const numDecodeMessageBottomUp = (array) => {
  let totalWays = 0;
  for(let i = array.length - 1; i > 0; i--) {
    let increment = false;
    let position = i;
    if(parseInt(array[position]) > 0) {
      if(position == array.length - 1) {
        totalWays++;

      }
      increment = true;
    } else {
      i--;
    }
    if(parseInt(array[position] + array[position - 1]) < 27 && increment == true && array[position - 1] !== "0") {
      totalWays++;
    }
    
  }
  return totalWays;
}

console.log(numDecodeMessageBottomUp("273264"));
