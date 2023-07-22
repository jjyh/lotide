//The function returns an object with letter positions sentence as array
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(0x1F923) + "Assertion Passed:" + actual + "===" + expected);
  } else console.log(String.fromCodePoint(0x1F621) + `Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(array1, array2) {
  let matches = 0;
  if (array1.length === array2.length){
    for (i=0; i<=array1.length; i++){
      if (array1[i] === array2[i]){
      matches ++;
      }
    }
    if (matches < array1.length){
      return false;
    } else return true;
  } else return false;
}

const assertArraysEqual = function(array1, array2){
  if (eqArrays(array1, array2)){
    console.log("the two arrays match");
  } else console.log("the two arrays don't match");
}

const letterPositions = function(sentence) {
	const results = {};
  let counter = 0;
  for (letter of sentence){
    if (letter >= "a" && letter <= "z" || letter >= "A" && letter <= "Z"){
    	if (letter in results){
      	results[letter].push(counter);
        counter+=1;
      } else {results[letter] = [counter]; 
        counter+=1;}
    //console.log(letter);
    //console.log(results[letter]);
    }
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