/*
Define a function called `firstHalf` that takes in a string
parameter. The function should return a new string containing only the first
half of characters in the string parameter.
*/

function firstHalf(str) {
  // Your code here 
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (str.indexOf(char) < str.length / 2) {
      newStr += char;
    }
  }
  return newStr;
}

// console.log(firstHalf('academy')); // 'acad'
// console.log(firstHalf('planet'));  // 'pla'
// console.log(firstHalf('sport'));   // 'spo'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = firstHalf;
