/* CHALLENGE
Given an integer, return an integer that is the reverse 
ordering of that which was received. E.g
    reverseInteger(-123) // should return -321
*/


function reverseString(text) {
    return [...text].reduce((a, c) => c + a, '')
}

function reverseInteger(num) {
    let reversedString = reverseString(num.toString())
    let reversedNumber = parseInt(reversedString)
    return reversedNumber * Math.sign(num)
}



module.exports = reverseInteger;
