const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

//Write test assertions for the various scenarios with middle
//test first two case returns empty
assertArraysEqual(middle([1]), []); // => []
//assertArraysEqual(middle([1, 2], [])); // => []
//odd return single
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
//even return two elements
assertArraysEqual(middle([1, 2, 3, 4]), [2,3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [1]); // => [3, 4]
