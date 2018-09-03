const findDuplicate = (array) => {
  if (array.length < 2) {
    throw new Error('Finding duplicate requires at least two numbers');
  }

  const n = array.length - 1;
  const sumWithoutDuplicate = (n * n + n) / 2;
  const actualSum = array.reduce((acc, cur) => acc + curr, 0);

  return actualSum - sumWithoutDuplicate;
}
