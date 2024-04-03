/*
Define a function called `secondHalf` that takes in a string
parameter. The function should return a new string containing only the second
half of characters in the string parameter.
*/

function secondHalf(str) {
  // Your code here
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (str.indexOf(char) >= str.length / 2) {
      newStr += char;
    }
  }
  return newStr;
}

// console.log(secondHalf('academy')); // 'emy'
// console.log(secondHalf('planet'));  // 'net'
// console.log(secondHalf('sport'));   // 'rt'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = secondHalf;
