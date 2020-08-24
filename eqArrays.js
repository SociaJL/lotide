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
module.exports = eqArrays;



