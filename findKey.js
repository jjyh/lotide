/*takes in an object and a callback. 
It should scan the object and return the first key for which the callback returns a truthy value. 
If no key is found, then it should return undefined.
*/
const findKey = function (obj, callback){
  //loop through object 
  for (item of Object.keys(obj)){
  //if key.value = searchVal then return first key
    if (callback(obj[item])){
      return item;
      break;
    } 
  }
}

module.exports = findKey;