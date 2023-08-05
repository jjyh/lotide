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

const without = function(source, itemsToRemove){
  newArray = [];
  for (i = 0; i <= source.length - 1; i++){
    //console.log(i + " at " + newArray[i]);
    for (j = 0; j <= itemsToRemove.length - 1; j++){
      if (source[i] != itemsToRemove[j]){
        newArray.push(source[i]);
        break;
      }
    }
  }
  console.log(newArray);
  return newArray;
}

//test
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;