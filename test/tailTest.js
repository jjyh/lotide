const tail = require('../tail');
const assertEqual = require('../assertEqual');

//test
const result = tail(["Hello", "lighthouse", "labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "lighthouse");
assertEqual(result[1], "labs");

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
