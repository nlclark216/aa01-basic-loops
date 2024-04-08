/*
Write a function moreDotLessDash that accepts a string as an argument. The
function should return a boolean indicating whether or not the string contains
more dots (.) than dashes (-).
*/

// 1. split string into characters
// 2. start vars dots and dashes, set to 0
// 3. if char = dot, increast dot count, ditto for dashes
// 4. if dots > dashes, return true, else return false

let moreDotLessDash = (str) => {
    str = str.split('');
    let dots = 0;
    let dashes = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === '.') {
            dots++;
        } else if (char === '-') {
            dashes++;
        }
    }
    if (dots > dashes) {
        return true;
    }
    return false;
}

console.log(moreDotLessDash('2-D arrays are fun. I think.'));           // true
// console.log(moreDotLessDash('Morse code is great.'));                   // true
// console.log(moreDotLessDash('.... . -.--'));                            // true
// console.log(moreDotLessDash('.--. .-. --- --. .-. .- -- -- . .-.'));    // false
// console.log(moreDotLessDash('high-flying acrobat.'));                   // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = moreDotLessDash;
