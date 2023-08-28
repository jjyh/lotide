// 
const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
//They have the same number of keys
//The value for each key in one object is the same as the value for that same key in the other object
  if((Object.keys(object1).length) === (Object.keys(object2).length)){
    for (item of Object.keys(object1)){
      //if key.value = searchVal then return first key
      if (object1[item] === object2[item]){
        return true;
      }
      else if (eqArrays(object1[item], object2[item]) === true){
        return true;
      } else return false;
    }
  } else return false
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; //modify our function to use the util library's inspect function. The very first thing we should do in our function is import the library so that the function can use it
  if (eqObjects(actual, expected)){
    console.log(String.fromCodePoint(0x1F923) + ` Assertion Passed ${inspect(actual)}===${inspect(expected)}`);
  } else console.log(String.fromCodePoint(0x1F621) + `Assertion Failed ${inspect(actual)} !== ${inspect(expected)}`);
};

module.exports = assertObjectsEqual;