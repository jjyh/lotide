const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(0x1F923) + "Assertion Passed:" + actual + "===" + expected);
  } else console.log(String.fromCodePoint(0x1F621) + `Assertion Failed: ${actual} !== ${expected}`);
};

const tail = function(array) {
  let arrayTail = array.slice(1);
  //console.log(arrayTail)
  return arrayTail;
};

//test
const result = tail(["Hello", "lighthouse", "labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "lighthouse");
assertEqual(result[1], "labs");

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!