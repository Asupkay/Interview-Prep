const halfAdder = (a, b) => {
  const sum = a ^ b;
  const carry = a & b;
  return [sum, carry]
}

const fullAdder = (a, b, carry) => {
  console.log("a", a, b, carry);
  const halfAdd = halfAdder(a, b);
  console.log(halfAdd)
  let sum = carry ^ halfAdd[0];
  carry = carry & halfAdd[0];
  carry = carry | halfAdd[1];
  console.log(sum, carry);
  return [sum, carry];
}

const addBinary = (a, b) => {
  let sum = '';
  let carry = '';
  for(let i = a.length - 1; i>=0; i--) {
    if(i == a.length - 1) {
      const halfAdd1 = halfAdder(a[i],b[i]);
      sum = halfAdd1[0] + sum;
      carry = halfAdd1[1];
    } else {
      const fullAdd = fullAdder(a[i],b[i],carry);
      sum = fullAdd[0] + sum;
      carry = fullAdd[1];
    }

  } 
  return carry ? carry + sum : sum;
}

console.log(addBinary("110", "010"));
