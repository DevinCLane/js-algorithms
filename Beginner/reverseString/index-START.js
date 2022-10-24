/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


// chaining built-in methods
function reverseString(text) {
    return text.split('').reverse().join('');
}

// using fancy spread operator from ES6+
function reverseString(str) {
    return [...str].reverse().join('')
}

// using a for loop

function reverseString(str) {
    let result = ''
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result;
}

// using for..of syntax ES6+

function reverseString(str) {
    let result = ''
    for (char of str) {
        result = char + result
    }
    return result;
}

// using reduce

function reverseString(str) {
    return [...str].reduce((acc, cur) => cur + acc, '')
}


// using spread operator again
function reverseString(str) {
    return [...str].reverse().join('');
}

module.exports = reverseString