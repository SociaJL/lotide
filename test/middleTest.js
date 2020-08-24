const middle = require('../middle.js'); 
const assert = require('chai').assert;

describe("#middle", () => {
    it("returns [] if the array length is <= 2 ", () => {
    assert(middle([1, 2]));
   });
});

it("returns the middle element on array lengths that are odd", () => {
   assert(middle([1, 2, 3, 4, 5]));
});

it("returns the middle two elements when the array length is even", () => {
  assert(middle([1, 2, 3, 4, 5, 6]));
});
