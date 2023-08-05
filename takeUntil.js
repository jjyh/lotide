/*map function will take in two arguments:

take in two parameters:
The array to work with
The callback (which Lodash calls "predicate")

return a "slice of the array with elements taken from the beginning." 
It should keep going until the callback/predicate returns a truthy value.
To keep things simple, the callback should only be provided one value: The item in the array.
*/
const takeUntil = function(array, callback) {
  // ...
  let results = [];
  for (let item of array) {
    if (callback(item)){
      break}
    else {results.push(item)}
  }
  console.log(results);
  return results;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

//expected output
//[ 1, 2, 5, 7, 2 ]
//---
//[ 'I\'ve', 'been', 'to', 'Hollywood' ]

//======
const eqArrays = function(array1, array2) {
  let matches = 0;
  //console.log(array1.length, array2.length);
  if (array1.length === array2.length){
    for (i=0; i<=array1.length; i++){
      if (array1[i] === array2[i]){
      matches ++;        
      } return true;
    }
    //if (matches < array1.length){
    //  return false;
    //} else return true;
  } else return false;
}

const assertArraysEqual = function(array1, array2){
  if (eqArrays(array1, array2)){
    console.log("the two arrays match");
  } else console.log("the two arrays don't match");
}

//test
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]); // => true
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]); // => true

module.exports = takeUntil;