/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/



function isAnagram(stringA, stringB) {
    const sanitizeStr = str => {
        return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('')
    }
    return sanitizeStr(stringA) === sanitizeStr(stringB)
}


module.exports = isAnagram