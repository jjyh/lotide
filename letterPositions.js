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
  }
  return results
}

module.exports = letterPositions;