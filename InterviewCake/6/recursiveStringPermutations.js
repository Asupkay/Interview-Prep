const stringPerms = (string) => {
  return stringPermsHelper(string.substring(0,string.length - 1), string[string.length - 1]);
} 

const stringPermsHelper = (string, letter) => {
  if(string.length == 1) {
    return [string + letter, letter + string];
  } else {
    let perms = stringPermsHelper(string.substring(0, string.length - 1), string[string.length - 1]);
    let morePerms = [];
    perms.forEach((perm) => {
      for(let i = 0; i < perm.length + 1; i++) {
        morePerms.push(perm.slice(0,i) + letter + perm.slice(i,perm.length));
      } 
    });
    return morePerms;
  }
};

const stringPerms2 = (string) => {
  if(string.length <= 1) {
    return new Set(string);
  }

  let firstHalfOfString = string.slice(0, -1);
  let lastLetter = string[string.length - 1];

  let perms = stringPerms2(firstHalfOfString);
  let morePerms = [];
  perms.forEach((perm) => {
    for(let i = 0; i < perm.length + 1; i++) {
      morePerms.push(perm.slice(0,i) + lastLetter + perm.slice(i, perm.length));
    }
  });
  return morePerms;
}
console.log(stringPerms("cats"));
console.log(stringPerms2("cats"));
