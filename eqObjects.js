// take in two objects and returns true or false, based on a perfect match.

const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;