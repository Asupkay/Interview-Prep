class Trie {
  constructor() {
    this.trie = {}
  }

  search(word) {
    return this.searchHelper(this.trie, word);
  }
  
  searchHelper(trie, word) {
    if(word == "") {
      if(trie.end == true) {
        return true;
      } else {
        return null;
      }
    }

    let cChar = word.charAt(0);
    if(trie[cChar]) {
      return this.searchHelper(trie[cChar], word.substr(1))
    } else {
      return null;
    }
  }

  addWord(word) {
    let current = this.trie;
    for(let i = 0; i < word.length; i++) {
      if(!current[word[i]]) {
        current[word[i]] = {};
      }
      current = current[word[i]]
    }
    current.end = true;
    console.log(JSON.stringify(trie));
  }
}

let trie = new Trie();
trie.addWord("cow");
trie.addWord("coy");
trie.addWord("watermelon");
console.log(trie.search("cow"));
