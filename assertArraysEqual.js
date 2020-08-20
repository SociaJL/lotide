const assertArraysEqual = function(actual, expected) {
  // return true/false comparing two arrays and their values
  let matches = true;
  if (actual.length !== expected.length) { // break if length not equal
    matches = false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) matches = false;
  }
  if (matches) {
    console.log(`Does Match: ${actual} !== ${expected}`);
  } else {
    console.log(`Doesn\'t Match: ${actual} !== ${expected}`);
  }
};

assertArraysEqual([1, '2', 3], [1, '2', 3]);
assertArraysEqual([1, 2, 3], [1, '2', 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);