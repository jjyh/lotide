// take in two objects and returns true or false, based on a perfect match.

const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

// Returns true if both objects have identical keys with identical values.
//Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
//They have the same number of keys
//The value for each key in one object is the same as the value for that same key in the other object
  if((Object.keys(object1).length) !== (Object.keys(object2).length)){
    return false;
  } else {
    for (let item of Object.keys(object1)){
      if ((Array.isArray(object1[item]) && Array.isArray(object2[item]))){
        if (eqArrays(object1[item], object2[item]) === false){
          return false;
        } 
      } else {
        if (object1[item] !== object2[item]){
          return false;
        }
      } return true;
    } 
  }
};


// TEST CODE (step 3)
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };

assertEqual(eqObjects(shirtObject,anotherShirtObject), true); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false); // => false

// step 4 array values
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false

// re feedback - check if it fails when first item matches but second does not
const AmultiColorShirtObject2 = { colors: ["red", "green"], size: "medium" };
const AanotherMultiColorShirtObject2 = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(AmultiColorShirtObject2  , AanotherMultiColorShirtObject2), false); // => false


module.exports = eqObjects;