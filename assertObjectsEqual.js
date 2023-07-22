// 

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(0x1F923) + "Assertion Passed:" + actual + "===" + expected);
  } else console.log(String.fromCodePoint(0x1F621) + `Assertion Failed: ${actual} !== ${expected}`);
};

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

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; //modify our function to use the util library's inspect function. The very first thing we should do in our function is import the library so that the function can use it
  //console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)){
    console.log(String.fromCodePoint(0x1F923) + ` Assertion Passed ${inspect(actual)}===${inspect(expected)}`);
  } else console.log(String.fromCodePoint(0x1F621) + `Assertion Failed ${inspect(actual)} !== ${inspect(expected)}`);
};

// TEST CODE
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };

assertObjectsEqual(shirtObject,anotherShirtObject); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
assertObjectsEqual(shirtObject , longSleeveShirtObject); // => false