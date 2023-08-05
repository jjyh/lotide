/*map function will take in two arguments:

//An array to map
//A callback function
//The map function will return a new array based on the results of the callback function
*/
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

//======
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

//test
assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]); // => true
assertArraysEqual(map(words, word => word[1]), ["x", "c", "t", "m", "t"]); // => false
assertArraysEqual(map(words, word => word.shift), ["x", "c", "t", "m", "t"]); // => false

module.exports = map;