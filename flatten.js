// take in arrays including nested and return flattened

const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


const flatten = function(fullArray){
  //console.log(fullArray[2].values())
  //for (let elements of fullArray[2].values()){
  //  console.log(elements);
  //}
  let flatArray = [];
  //let innerArray = [];
  for (i = 0; i < fullArray.length; i++){
    if (Array.isArray(fullArray[i])){ //if it is an array
      for (let elements of fullArray[i].values()){
        flatArray.push(elements);
      }
    } else flatArray.push(fullArray[i])
  }
  return flatArray;
  //console.log(flatArray)
}

module.exports = flatten;