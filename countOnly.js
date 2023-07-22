//countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(0x1F923) + "Assertion Passed:" + actual + "===" + expected);
  } else console.log(String.fromCodePoint(0x1F621) + `Assertion Failed: ${actual} !== ${expected}`);
};
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
//report back how many instances of each string were found in the allItems array of strings
/*
const countOnly = function(allItems, itemsToCount) {
  // for the itemsToCount 1, check allItems one by one and add value
  const results = {};
  for (let vip in itemsToCount){
  let matches = 0
    //for (i=0; i<=allItems.length; i++) 
    for (const item of allItems)
    if (vip == item){
      matches ++;
    }
    results[vip]=matches;
    console.log(results)
  }
  return results
}  
*/

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

//testcase

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

//next stage test
//const results = {}
//return results;

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);