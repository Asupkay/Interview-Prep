const stdin = process.openStdin();

let inputArray = [];

stdin.addListener("data", (d) => {
  inputArray = d.toString().split('\n');
});

stdin.addListener("end", () => {
  let sum = 0;
  for(i = 0; i < inputArray.length; i++) {
    sum += parseInt(inputArray[i]);
  }
  console.log(sum);
});
