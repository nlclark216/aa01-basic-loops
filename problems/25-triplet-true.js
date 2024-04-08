/*
Write a function tripletTrue that accepts a string as an argument. The function
should return a boolean indicating whether or not the the string contains three
of the same character consecutively.
*/

// 1. create vars first, second and third
// 2. if first === second AND second === third, increase count

let tripletTrue = (str) => {
    if (str.length < 3) {
        return false;
    }
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let first = str[i];
        let second = str[i + 1];
        let third = str[i + 2];
        if (first === second && second === third) {
            count ++; 
        }  
    } 
    if (count > 0) {
        return true;
        } else if (count === 0) {
            return false;
        }
}

// console.log(tripletTrue('caaabb'));        // true
// console.log(tripletTrue('terrrrrible'));   // true
// console.log(tripletTrue('runninggg'));     // true
// console.log(tripletTrue('bootcamp'));      // false
// console.log(tripletTrue('e'));             // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = tripletTrue;
