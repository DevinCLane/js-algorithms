/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/




function palindromeChecker(text) {
    const reversedText = text.split('').reverse().join('')
    // is the reversed word the same as the original word?
    // if so then it's a palindrome and we return true, otherwise false
    return reversedText === text
}

function palindromeChecker(text) {
    // go across half the text
    for (let i = 0; i < text.length / 2; i++) {
        // if one letter ever does not equal another letter in the spot it would be if reversed, return false
        // e.g., "applesauce", "a" should equal "e" i.e., text[0] should equal text.length - 1 - the index we are at.
        if (text[i] !== text[text.length - 1 - i]) {
            return false
        }
    }
    return true;
}

function palindromeChecker(text) {
    const reversedText = text.split('').reverse().join('')
    return reversedText === text;
}



module.exports = palindromeChecker;