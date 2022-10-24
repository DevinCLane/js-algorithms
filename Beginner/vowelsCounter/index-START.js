/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


function vowelsCounter(text) {
    let count = 0;
    const vowels = 'aeiou'
    for (let i = 0; i < text.length; i++) {
        if (vowels.includes(text.charAt(i).toLowerCase())) {
            count++;
        }
    }
    return count;
}

const vowels = 'aeiou'
function vowelsCounter(text) {
    let counter = 0;
    for (const letter of text.toLowerCase()) {
        if (vowels.includes(letter)) {
            counter++
        }
    }
    return counter;
}


// doing it again for practice
function countVowels(word) {
    const vowels = 'aeiou'
    let count = 0;
    for (letter of word.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++
        }
    }
    return count;
}

module.exports = vowelsCounter;
