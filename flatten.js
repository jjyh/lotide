// take in arrays including nested and return flattened

const flatten = function(fullArray){
  let flatArray = [];
  for (i = 0; i < fullArray.length; i++){
    if (Array.isArray(fullArray[i])){ //if it is an array
      for (let elements of fullArray[i].values()){
        flatArray.push(elements);
      }
    } else flatArray.push(fullArray[i])
  }
  return flatArray;
}

module.exports = flatten;