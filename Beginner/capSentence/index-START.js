/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/




function capSentence(text) {
  // store the words as an array, convert everything to lowercase
  const wordsArray = text.toLowerCase().split(' ')
  // create a new array to store the answer
  const capsArray = []
  // using forEach(), capitalize the first letter of each word, then add the sliced remainder of the word
  wordsArray.forEach(word => {
    capsArray.push(word[0].toUpperCase() + word.slice(1))
  })
  // join the caps array, return this
  return capsArray.join(' ')
}

function capSentence(text) {
  // using map

  const wordsArray = text.toLowerCase().split(' ')
  const capsArray = wordsArray.map(word => {
    return word[0].toUpperCase() + word.slice(1)
  })
  return capsArray.join(' ')
}


module.exports = capSentence