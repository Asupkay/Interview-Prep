const rand7 = () => {
  while(true) {
    let random = (rand5() - 1) * 5 + (rand5() - 1) + 1;
    if(random <= 21) {
      return random % 7 + 1;
    }
  }
}

const rand5 = () => {
  return Math.floor(Math.random() * 5) + 1;
}
