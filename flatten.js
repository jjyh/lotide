// take in arrays including nested and return flattened

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

const assertArraysEqual = function(array1, array2){
  if (eqArrays(array1, array2)){
    console.log("the two arrays match");
  } else console.log("the two arrays don't match");
}

const flatten = function(fullArray){
  //console.log(fullArray[2].values())
  //for (let elements of fullArray[2].values()){
  //  console.log(elements);
  //}
  let flatArray = [];
  //let innerArray = [];
  for (i = 0; i < fullArray.length; i++){
    if (Array.isArray(fullArray[i])){ //if it is an array
      for (let elements of fullArray[i].values()){
        flatArray.push(elements);
      }
    } else flatArray.push(fullArray[i])
  }
  console.log(flatArray)
}

//test
flatten([1, 2, [3, 4], 5, [6]])
flatten([[1], 2, [3, 4], 5, 9])

module.exports = flatten;