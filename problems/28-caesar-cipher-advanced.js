/*
Write a method caesarCipher(string, num) that takes in a string and a number.
The function should return a new string where every character of the original is
shifted num characters in the alphabet.

Feel free to use this variable: let alphabet = "abcdefghijklmnopqrstuvwxyz";
*/

let alphabet = "abcdefghijklmnopqrstuvwxyz"

function caesarCipher(string, num) {
    let newArr = [];
    string = string.split('');
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
       for (let j = 0; j < alphabet.length; j++) {
        let letter = alphabet[j];
        let newLetter = alphabet[j + num]
        if (char === letter) {
            newArr.push(newLetter);
        }
       }
    } 
    return newArr.join('')
}

// console.log(caesarCipher("apple", 1)); // "bqqmf"
// console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
// console.log(caesarCipher("zebra", 4)); // "difve"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = caesarCipher;
