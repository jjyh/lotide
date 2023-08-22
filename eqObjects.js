// take in two objects and returns true or false, based on a perfect match.

const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

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
const multiColorShirtObject2 = { colors: ["red", "green"], size: "medium" };
const anotherMultiColorShirtObject2 = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true


module.exports = eqObjects;