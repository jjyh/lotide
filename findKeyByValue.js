//takes in an object and a value. It should scan the object and return the first key which contains the given value. 
//If no key with that given value is found, then it should return undefined.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(0x1F923) + "Assertion Passed:" + actual + "===" + expected);
  } else console.log(String.fromCodePoint(0x1F621) + `Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = function (obj, searchVal){
  //let resultKey = ""; 
  //loop through object 
  for (item of Object.keys(obj)){
  //if key.value = searchVal then return first key
    if (obj[item] === searchVal){
      let resultKey = item;
      console.log(resultKey);
      return resultKey;
      break;
    } 
  }
}

// TEST CODE
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;