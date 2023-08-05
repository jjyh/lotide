const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe("#middle", () => {
  //Write test assertions for the various scenarios with middle
  //test first two case returns empty
  it("returns [] for [1])", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns [] for [1, 2])", () => {
    assert.deepEqual(middle([1,2]), []);
  });
  //odd return single
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]); 
  });
  //even return two elements
  it("returns [2,3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]); 
  });
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); 
  });

});