/*
Define a function called `validHexCode` that returns `true` if its string
parameter is a valid hex code.

A valid hex code must begin with a pound key `#` followed by 6 characters.
Each character must be a digit from 0-9 or an alphabetic character from A-F.
All alphabetic characters may be uppercase or lowercase.
*/

// Your code here

let hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'A', 'B', 'C',
'D', 'E', 'F', '#']

function validHexCode(str) {
  for (let i = 0; i < str.length; i++) {
    let firstChar = str[0];
    let position = str.indexOf(i)
    if (firstChar !== '#' || str.length !== 7) {
      return false;
    }  else if (firstChar === '#' && str.length === 7) {
      return true
    } else if (position > 0 && hexValues.includes(str[i]) !== true) {
      return false;
    }
  }
}

console.log(validHexCode("#123456"));  // true
console.log(validHexCode("!123456"));  // false
console.log(validHexCode("#123"));     // false
console.log(validHexCode("#1234567")); // false
console.log(validHexCode("1234567"));  // false
console.log(validHexCode("123456"));   // false
console.log(validHexCode("#ABCDEF"));  // true
console.log(validHexCode("#abcDEF"));  // true
console.log(validHexCode("#88ef29"));  // true
console.log(validHexCode("#222!E4"));  // false


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
try {
  module.exports = validHexCode;
} catch {}
