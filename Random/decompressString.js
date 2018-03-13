/*Decompress string - string (s) followed by {n} denotes s repeating n times 
"a(b(c){2}){2}d" decompresses to "abccbccd" 
"((x){3}(y){2}z){2}" decompresses to "xxxyyzxxxyyz"*/

const decompressString = (compressedString) => {
  let fullString = "";
  //Make start an array and pop of the starts so you know when the last start was this helps with moving over the string instead of making it recursive
  let start = -1;
  let position = 0;

  while(compressedString[position] != ')') {
    fullString += compressedString[position];
    if(compressedString[position] == '(') {
      start = position;
    }
    position++;
    if(position >= compressedString.length) {
      return compressedString;
    }
  }

  let substring = compressedString.substring(start + 1, position);
  fullString = fullString.slice(0,start) + fullString.slice(start + 1); 
  for(let times = 0; times < parseInt(compressedString[position + 2]) - 1; times++) {
    fullString += substring;
  }
  fullString += compressedString.substring(position + 4, compressedString.length);
  return decompressString(fullString);
}

console.log(decompressString("((x){3}(y){2}z){2}"));
console.log(decompressString("a(b(c){2}){2}d"));
