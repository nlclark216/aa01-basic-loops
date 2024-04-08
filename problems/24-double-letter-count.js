/*
Write a function doubleLetterCount that takes in a string and returns the number
of times that the same letter repeats twice in a row.
*/

// Your code here 

let doubleLetterCount = function (string) {
    let count = 0;
    string = string.split('');
    for (let i = 0; i < string.length; i++){
        let first = string[i];
        let second = string[i + 1];
        if (first === second) {
            count += 1;
        }
    }
    return count;
}

console.log(doubleLetterCount("the jeep rolled down the hill"));  // 3
// console.log(doubleLetterCount("bootcamp")); // 1

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = doubleLetterCount;
