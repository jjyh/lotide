const tail = function(array) {
  if (array = []) { //add edge case
    return array;
  } 
  else if (array.isArray() = false){
    return undefined;
  }
  else {
  let arrayTail = array.slice(1);
  //console.log(arrayTail)
  return arrayTail;
  }
};

module.exports = tail;