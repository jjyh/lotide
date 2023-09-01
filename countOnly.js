//countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed.
const countOnly = function(allItems, itemsToCount) {
  const results = {}
  for (const item of allItems) {
    if (itemsToCount[item]) { 
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
    //console.log(item);
  }
  return results;
}

module.exports = countOnly;