//takes in an object and a value. It should scan the object and return the first key which contains the given value. 
//If no key with that given value is found, then it should return undefined.

const findKeyByValue = function (obj, searchVal){ 
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

module.exports = findKeyByValue;