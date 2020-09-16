
// take in two arrays and return true or false based on a perfect match
const eqArrays = function (arr1Input, arr2Input) {
// if length of the arrays dont match, then they cant have the same value.
  if (arr1Input.length !== arr2Input.length) {
    return false;
  }
// a return variable is set to true as a default
  let rtn = true;
// loops through the arrays
  for (let i = 0; i < arr1Input.length; i++) {
// if the index values are the same then rtn is set to false changing it from true
    if (arr1Input[i] !== arr2Input[i]) {
      rtn = false;
    }
  }
// returns the current value of rtn after all the code has run. 
  return rtn;
};
module.exports = eqArrays;



