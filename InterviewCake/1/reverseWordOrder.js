const reverseWords = (message) => {
  reverse(message, 0, message.length - 1);
  
  let startIndex = 0;
  let endIndex = 0;
  while(endIndex <= message.length) {
    if(message[endIndex] === ' ' || endIndex === message.length) {
      reverse(message, startIndex, endIndex - 1);
      startIndex = endIndex + 1;
    }
    endIndex++;
  }
}

const reverse = (message, startIndex, endIndex) => {
  while(startIndex < endIndex) {
    let temp = message[startIndex];
    message[startIndex] = message[endIndex];
    message[endIndex] = temp;
    startIndex++;
    endIndex--;
  }
}

const message = [ 'c', 'a', 'k', 'e', ' ',
                'p', 'o', 'u', 'n', 'd', ' ',
                's', 't', 'e', 'a', 'l' ];

reverseWords(message);

console.log(message.join(''));
// Prints: 'steal pound cake'
