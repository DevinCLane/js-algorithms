/*
Translate the provided string to pig latin by following the rules below:

- For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the end of the word sequence and "ay" affixed. E.g  
  - "pig" = "igpay"
- For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed. E.g  
  - "glove" = "oveglay"
-  For words that begin with vowel sounds, simply add "way" to the end of the word. E.g
  - "explain" = "explainway”
*/

function pigLatin(str) {
  // convert the string to lower case
  str = str.toLowerCase()
  // keep track of vowel index
  let vowelIndex = 0
  // set up our vowels
  const vowels = ['a', 'e', 'i', 'o', 'u']
  // if the first letter is a vowel, add the "way" ending
  if (vowels.includes(str[0])) {
    return str + 'way'
  }
  else {
    for (const char of str) {
      if (vowels.includes(char)) {
        vowelIndex = str.indexOf(char)
        break;
      }
      return str.slice(vowelIndex) + str.slice(0, vowelIndex) + 'ay'
    }
  }
}

module.exports = pigLatin;
