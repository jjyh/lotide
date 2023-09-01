const tail = require('../tail');
const assert = require('chai').assert;

// test returns everything except the first element of the array.
// Note that for comparing arrays, Chai gives us assert.deepEqual, 
// because assert.strictEqual simply uses === to compare values, which will not work for comparing objects and arrays.

describe("#tail", () => {
  it("returns lighthouse, labs for ['Hello', 'lighthouse', 'labs'])", () => {
    assert.deepEqual(tail(["Hello", "lighthouse", "labs"]), ['lighthouse','labs']);
  });
  it("returns 'Lighthouse, Labs' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ['Lighthouse','Labs']); 
  });
});