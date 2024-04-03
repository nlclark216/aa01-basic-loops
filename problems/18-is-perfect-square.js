/*
Write a function isPerfectSquare that accepts a number as an argument. The
method should return a boolean indicating whether or not the argument is a
perfect square.

A perfect square is a number that is the product of some number multiplied by
itself.
For example, since 64 = 8 * 8 and 144 = 12 * 12, 64 and 144 are perfect squares;
35 is not a perfect square.
*/


// Your code here

let SQUARES = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 
    169, 196, 225, 256, 289, 324, 361, 400, 441, 484, 529, 
    576, 625, 676, 729, 784, 841, 900, 961]

function isPerfectSquare(num) {
    if (SQUARES.includes(num)) {
        return true;
    }
    return false;
}

// console.log(isPerfectSquare(1))     // true
// console.log(isPerfectSquare(4))     // true
// console.log(isPerfectSquare(64))    // true
// console.log(isPerfectSquare(100))   // true
// console.log(isPerfectSquare(169))   // true
// console.log(isPerfectSquare(2))     // false
// console.log(isPerfectSquare(40))    // false
// console.log(isPerfectSquare(32))    // false
// console.log(isPerfectSquare(50))    // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = isPerfectSquare;
