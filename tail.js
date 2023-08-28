const tail = function(array) {
  if (array.length < 2) { //add edge case
    return array;
  } 
  else {
    return array.slice(1);
  }
};

module.exports = tail;