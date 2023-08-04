const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

//test
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
//assertEqual(eqArrays([1, 2, 3], [2, 3, 1]), true);
//eqArrays([1, 2, 3], [1, 2, 3]) // => true
//eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
