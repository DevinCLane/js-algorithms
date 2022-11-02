/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/

const { create } = require("degit/dist/index-688c5d50");



function isAnagram(stringA, stringB) {
    const sanitizeStr = str => {
        return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('')
    }
    return sanitizeStr(stringA) === sanitizeStr(stringB)
}

// using a character map

const createCharMap = str => {
    const charMap = {};
    for (const letter of str) {
        if (charMap[letter]) {
            charMap[letter]++
        } else charMap[letter] = 1;
    }
    return charMap
}

function isAnagram(strA, strB) {
    if (strA.length === strB.length) {
        const charMapA = createCharMap(strA)
        const charMapB = createCharMap(strB)
        for (const char in charMapA) {
            if (charMapA[char] !== charMapB[char]) {
                return false;
            }
        }
        return true;
    }
    else return false;
}

module.exports = isAnagram