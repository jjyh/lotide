const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove){
  let newArray = [];
  for (let i = 0; i <= source.length - 1; i++){
    //console.log(i + " at " + newArray[i]);
    for (let j = 0; j <= itemsToRemove.length - 1; j++){
      if (source[i] != itemsToRemove[j]){
        newArray = source.splice(i,1);
        //break;
      }
    }
  }
  console.log(newArray);
  return newArray;
}

//test
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;