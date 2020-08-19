const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }

};

const eqArrays = function (arr1Input, arr2Input) {

  if (arr1Input.length !== arr2Input.length) {
    return false;
  }

  let rtn = true;

  for (let i = 0; i < arr1Input.length; i++) {

    if (arr1Input[i] !== arr2Input[i]) {
      rtn = false;
    }
  }

  return rtn;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);


