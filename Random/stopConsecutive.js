//*-------------------------------------------------------*
//| Rearrange a string with two consecutive characters or |
//| more so that there are no consecutive characters that |
//| are the same. Return the new string if it works None  |
//| if not                                                |
//*-------------------------------------------------------*
let rearrangeConsecutive = (origString) => {

    //An array that will act as a double sided queue to construct the new string
    let nStringArray = [];

    //Sort the original string into an array that holds the strings letter and there number of occurrences (Ex: aabbbc = [['b',3],['a', 2],['c',1]])
    sortOrigString = sortString(origString);

    let i = 0;
    //While we have not gotten through the whole array without adding another character to our new string array
    while(i < sortOrigString.length) {
        //This is the character we are currently trying to add
        let newChar = sortOrigString[i][0];
        //This is the first and last character of the double sided queue
        let lastChar = nStringArray[nStringArray.length-1];
        let firstChar = nStringArray[0];

        //If the first or last character is not the same as the new character and there are ones to put into the queue if not move along
        if(sortOrigString[i][1] > 0 && (lastChar != newChar || firstChar != newChar)) {
            if(lastChar != newChar) {
                //Push it onto the end of our new string
                nStringArray.push(newChar);
            } else {
                //Push onto the beginning of our new string
                nStringArray.unshift(newChar);
            }
            //Decrement the amount left to add and then reset the loop
            sortOrigString[i][1]--;
            i = 0; 
        } else {
            i++;
        }
    }

    //Turn the array back into a string
    nStringArray = nStringArray.join("");

    //If our new string isn't the same length we are missing a letter
    if(origString.length != nStringArray.length) {
        nStringArray = "None";
    }

    return nStringArray;
}

//Turns the string into a 2d array of characters sorted by their occurences
let sortString = (origString) => {
    
    //Create a character dict with the occurences of each character
    let characterDict = {};
    for(let i = 0; i < origString.length; i++) {
        let cchar = origString[i];
        if(!characterDict[cchar]) {
            characterDict[cchar] = 1;
        } else {
            characterDict[cchar] += 1;
        }
    }
    
    //Turn that dictionary into a 2d array
    let sorted = [];
    for(let key in characterDict) {
        sorted[sorted.length] = [key, characterDict[key]];
    }
    
    //Sort the 2d array by its value
    sorted.sort((a, b) => {
        return b[1] - a[1];
    });

    return sorted;
}

//--------------------------------TEST CASES------------------------------------
console.log("aabbaa: "  + rearrangeConsecutive("aabbaa"));
console.log("aabbbaa: "  + rearrangeConsecutive("aabbbaa"));
console.log("aabb: "  + rearrangeConsecutive("aabb"));
console.log("aabbb: "  + rearrangeConsecutive("aabbb"));
console.log("aabbcc: "  + rearrangeConsecutive("aabbcc"));
console.log("aaaa: "  + rearrangeConsecutive("aaaa"));
console.log("abcdooo: "  + rearrangeConsecutive("abcdooo"));
console.log("bbbaacc: " + rearrangeConsecutive("bbbaacc"));
