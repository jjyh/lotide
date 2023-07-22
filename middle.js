
// take in arrays and return middle

const eqArrays = function(array1, array2) {
  let matches = 0;
  if (array1 == [] && array2 == []){
    return false;
  }
  else if (array1.length === array2.length){
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


const middle = function(fullArray){
  //console.log(fullArray[2].values())
  //for (let elements of fullArray[2].values()){
  //  console.log(elements);
  //}
  let midArray = [];
  if (fullArray.length > 2){
    if (fullArray.length % 2 === 0){
      midArray.push(fullArray[Math.floor(fullArray.length / 2) - 1]);
      midArray.push(fullArray[Math.floor(fullArray.length / 2)]);
    } else midArray.push(fullArray[Math.floor(fullArray.length / 2)]); // odd
  }
  return midArray;
  //console.log(midArray)
}

//Write test assertions for the various scenarios with middle
//test first two case returns empty
assertArraysEqual(middle([1]), []); // => []
//assertArraysEqual(middle([1, 2], [])); // => []
//odd return single
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
//even return two elements
assertArraysEqual(middle([1, 2, 3, 4]), [2,3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [1]); // => [3, 4]
