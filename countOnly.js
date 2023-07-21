//countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed.
/Copy your assertEqual function into this new file.

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
//report back how many instances of each string were found in the allItems array of strings
const countOnly = function(allItems, itemsToCount) {
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

//======================
//*
Loop over allItems
In order to know how many Jason's are in our list, we need to scan the entire list. Let's start with a simple loop and make sure it 'works.
//
Instruction
Add code to loop over all the items in the array and print them to the console.

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    console.log(item);
  }

  return results;
}

//*The output should look like this:

Karl
Salima
Agouhanna
Fang
Kavith
Jason
Salima
Fang
Joe
(... assertion output follows ...)
Count them all
Although we're meant to count only the items that matter, a simpler next step (requiring lesser logic) is to simply count everything.

Instruction
Increment the count of each item into results as we encounter each string item in the array.
//
