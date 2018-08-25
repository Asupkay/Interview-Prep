const wordCloudData = (sentence) => {
  let lowerCase = sentence.toLowerCase();
  let withoutPunctuation = lowerCase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
  let withoutMultipleSpace = withoutPunctuation.replace(/\s{2,}/g," ");

  let wordArray = withoutMultipleSpace.split(" ");
  let wordMap = {}
  for(let i = 0; i < wordArray.length; i++) {
    if(wordMap[wordArray[i]]){
      wordMap[wordArray[i]]++;
    } else {
      wordMap[wordArray[i]] = 1;
    }
  }
  return wordMap;
}

console.log(wordCloudData("Add milk and eggs, then add flour and sugar."));
