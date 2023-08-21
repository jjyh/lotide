const eqArrays = function(array1, array2) {
  let matches = 0;
  if (array1.length === array2.length){
    for (i=0; i< array1.length; i++){
      if (array1[i] === array2[i]){
      matches ++;
      }
    }
    if (matches < array1.length){
      return false;
    } else return true;
  } else return false;
}

module.exports = eqArrays;