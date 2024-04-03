/*
Define a function called `validHexCode` that returns `true` if its string
parameter is a valid hex code.

A valid hex code must begin with a pound key `#` followed by 6 characters.
Each character must be a digit from 0-9 or an alphabetic character from A-F.
All alphabetic characters may be uppercase or lowercase.
*/

// Your code here

// 1. code must begin with # and have a length of 7
// 2. every character must be  valid hex value

let hexValues = "0123456789abcdefABCDEF"

function validHexCode(str) {
  for (let i = str.length - 1; i > 0; i--) {
    let firstChar = str[0];
    let char = str[i];
    if (firstChar !== '#' || str.length !== 7) {
      return false;
    }  else if (!hexValues.includes(char)) {
      return false
    }
  }
  return true;
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
