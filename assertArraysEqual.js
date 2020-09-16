
// Function to take in 2 arrays and compare them. 
const assertArraysEqual = function(actual, expected) {
  // return true/false comparing two arrays and their values
  // matches is set to true
  let matches = true;
  // compares the length of both arrays, if not equal length, then they cannot be equal value.
  if (actual.length !== expected.length) { 
  // this will set matches to false if run because matches is a locally scoped variable.
    matches = false;
  }
  // loops through each element in array
  for (let i = 0; i < actual.length; i++) {
  // if the element in the arrays dont match, fase will be returned
    if (actual[i] !== expected[i]) matches = false;
  }
  // if the arrays length and value match
  if (matches) {
    console.log(`Does Match: ${actual} === ${expected}`);
  // if the arrays length and value dont match
  } else {
    console.log(`Doesn\'t Match: ${actual} !== ${expected}`);
  }
  
};

module.exports = assertArraysEqual;

