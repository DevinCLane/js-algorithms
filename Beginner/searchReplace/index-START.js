function searchReplace(str, word, newWord) {
    // match upper case of `word` to `newWord`
    if (word[0] === word[0].toUpperCase()) {
        newWord = newWord[0].toUpperCase() + newWord.slice(1)
    }
    return str.replace(word, newWord)
}



module.exports = searchReplace