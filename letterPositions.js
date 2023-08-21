const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
	const results = {};
  let counter = 0;
  for (letter of sentence){
    //if (letter >= "a" && letter <= "z" || letter >= "A" && letter <= "Z"){
    	if (letter in results){
      	results[letter].push(counter);
        counter+=1;
      } else {results[letter] = [counter]; 
        counter+=1;}
    //console.log(letter);
    //console.log(results[letter]);
    //}
  }
  return results
}

//testcase
const line = "hello"
//const line = "CCC a bb. xyz!"

const result = letterPositions(line);
console.log(result)

//test Use assertArraysEqual to compare the 4 letters and their expected position
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").h, [0]) // => true
assertArraysEqual(letterPositions("hello").l, [2,3]) // => true
assertArraysEqual(letterPositions("hello").o, [4]) // => true

module.exports = letterPositions;