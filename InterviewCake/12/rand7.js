const rand7 = () => {
  return Math.floor(Math.random() * 7) + 1;
}

const rand5 = () => {
  let random = rand7();
  while(random > 5) {
    random = rand7();
  }
  return random;
}
console.log(rand5());
