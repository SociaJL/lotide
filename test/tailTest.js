
const tail = require('../tail.js');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns '5' for [5, 6, 7 && '6' for [6, 7]", () => {
    assert.strictEqual(tail([5, 6, 7])[0], [6, 7][0]); 
  });
});

it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs'] && 'Lighthouse' for ['Lighthouse', 'Labs']", () => {
  assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[0], ["Lighthouse", "Labs"][0]);
});
