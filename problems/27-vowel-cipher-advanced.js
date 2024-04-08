/*
Write a function vowelCipher that takes in a string and returns a new string
where every vowel becomes the next vowel in the alphabet.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 

let vowels = ['a', 'e', 'i', 'o', 'u']

let vowelCipher = (str) => {
    let newArr = []
    str = str.split('');
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (vowels.includes(char) !== true) {
            newArr.push(char);
        }
        
        if (char === vowels[0]) {
            newArr.push(vowels[1])
        } else if (char === vowels[1]) {
            newArr.push(vowels[2]);
        } else if (char === vowels[2]) {
            newArr.push(vowels[3]);
        } else if (char === vowels[3]) {
            newArr.push(vowels[4]);
        } else if (char === vowels[4]) {
            newArr.push(vowels[0]);
        }
    }
    return newArr.join('');
}

// console.log(vowelCipher("bootcamp")); // "buutcemp"
// console.log(vowelCipher("paper cup")); // "pepir cap"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = vowelCipher;
