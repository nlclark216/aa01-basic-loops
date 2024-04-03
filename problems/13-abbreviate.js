/*
Write a function abbreviate(word) that takes in a string arg. The function
should return a new string where all of its vowels are removed.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 

let VOWELS = ['a', 'e', 'i', 'o', 'u']

function abbreviate(word) {
    let newStr = ''
    for (let i = 0; i < word.length; i++) {
        let char = word[i].toLowerCase();
        if (VOWELS.includes(char) !== true) {
            newStr += word[i];
        }
    }
    return newStr;
}

// console.log(abbreviate('wonderful')); // 'wndrfl'
// console.log(abbreviate('mystery')); // 'mystry'
// console.log(abbreviate('Accordian')); // 'ccrdn'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = abbreviate;
