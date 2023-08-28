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
  return results;
}

//=====

const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

module.exports = takeUntil;