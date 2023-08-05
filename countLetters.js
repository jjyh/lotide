//The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(0x1F923) + "Assertion Passed:" + actual + "===" + expected);
  } else console.log(String.fromCodePoint(0x1F621) + `Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(sentence, itemsToCount) {
  const results = {} //empty object
  for (letter of sentence){
    if (letter >= "a" && letter <= "z" || letter >= "A" && letter <= "Z"){
      //console.log(letter);
      if (isNaN(results[letter])){ // otherwise it tries to add to NaN and gets NaN
        results[letter]=1;
      } else {results[letter]+=1};
      //console.log(results[letter]);
    } 
  }
  return results
}

//testcase

const sentence = "CCC a bb. xyz!"

const result = countLetters(sentence);
console.log(result)
assertEqual(result["a"], 1);
assertEqual(result["b"], 2);
assertEqual(result["C"], 3);
assertEqual(result["k"], undefined);
assertEqual(result["1"], undefined);

module.exports = countLetters;