// 
const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');
const eqObjects = require('../eqObjects');

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; //modify our function to use the util library's inspect function. The very first thing we should do in our function is import the library so that the function can use it
  if (eqObjects(actual, expected)){
    console.log(String.fromCodePoint(0x1F923) + ` Assertion Passed ${inspect(actual)}===${inspect(expected)}`);
  } else console.log(String.fromCodePoint(0x1F621) + `Assertion Failed ${inspect(actual)} !== ${inspect(expected)}`);
};

module.exports = assertObjectsEqual;