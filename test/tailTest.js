const tail = require('../tail');
const assert = require('chai').assert;

// test
// Note that for comparing arrays, Chai gives us assert.deepEqual, 
// because assert.strictEqual simply uses === to compare values, which will not work for comparing objects and arrays.

describe("#tail", () => {
  it("returns labs for ['Hello', 'lighthouse', 'labs'])", () => {
    assert.deepEqual(tail(["Hello", "lighthouse", "labs"]), ['labs']);
  });
  it("returns 'Labs' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ['Labs']); 
  });
  it("returns '3' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(['Yo Yo', 'Lighthouse', 'Labs'].length, 3); 
  });

});