/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function longestWord(text) {
    const wordArray = text.split(' ')
    let longestWordLength = 0
    let longestWord = ''
    for (const word of wordArray) {
        if (word.length > longestWordLength) {
            longestWordLength = word.length
            longestWord = word
        }
    }
    return longestWord
}

// using reduce

function longestWord(text) {
    const wordArray = text.split(' ')
    const result = wordArray.reduce((maxLengthWord, currentWord) => {
        if (currentWord.length > maxLengthWord.length) {
            return currentWord
        } else return maxLengthWord
    }, '')
    return result; 
}

// using sort

function longestWord(text) {
    const sortedArray = text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)
    return sortedArray[0]
}


module.exports = longestWord