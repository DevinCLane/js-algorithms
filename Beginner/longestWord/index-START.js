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


module.exports = longestWord