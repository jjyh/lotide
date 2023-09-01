//The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
const countLetters = function(sentence, itemsToCount) {
  const results = {} //empty object
  for (letter of sentence){
    if (letter >= "a" && letter <= "z" || letter >= "A" && letter <= "Z"){
      if (isNaN(results[letter])){ // otherwise it tries to add to NaN and gets NaN
        results[letter]=1;
      } else {results[letter]+=1};
    } 
  }
  return results
}

module.exports = countLetters;