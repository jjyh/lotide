//The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(0x1F923) + "Assertion Passed:" + actual + "===" + expected);
  } else console.log(String.fromCodePoint(0x1F621) + `Assertion Failed: ${actual} !== ${expected}`);
};


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
//report back how many instances of each string were found in the allItems array of strings
const countLetters = function(sentence, itemsToCount) {
  for (letter of sentence){
    console.log(letter);
  }
}

//testcase

const sentence = "CCC a bb. xyz!"

const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
//next stage test
//const results = {}
//return results;

assertEqual(result["a"], 1);
assertEqual(result["b"], 2);
assertEqual(result["C"], 3);
assertEqual(result["k"], 0);
assertEqual(result["1"], undefined);
