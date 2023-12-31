// take in arrays and return middle

const middle = function(fullArray){
  let midArray = [];
  if (fullArray.length > 2){
    if (fullArray.length % 2 === 0){
      midArray.push(fullArray[Math.floor(fullArray.length / 2) - 1]);
      midArray.push(fullArray[Math.floor(fullArray.length / 2)]);
    } else midArray.push(fullArray[Math.floor(fullArray.length / 2)]); // odd
  }
  return midArray;
}

module.exports = middle;