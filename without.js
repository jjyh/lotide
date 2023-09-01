const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove){
  let newArray = [];
  for (let i = 0; i <= source.length - 1; i++){
    for (let j = 0; j <= itemsToRemove.length - 1; j++){
      if (source[i] != itemsToRemove[j]){
        newArray = source.splice(i,1);
      }
    }
  }
  console.log(newArray);
  return newArray;
}

module.exports = without;