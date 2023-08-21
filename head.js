const head = function(array) {
  if (array = []) { //add edge case
    return array;
  } 
  else if (array.isArray() = false){
    return undefined;
  }
  else {
  return array[0];
  }
};

module.exports = head;