
// function that takes in an array and takes in a callback function. 
const takeUntil = (array, callback) => {
// an empty array to store the 
  let returnArray = [];
  // the value of each element in an array
  for (const val of array) {
// of the callback functions logic is matched with the val in the array loop
    if (callback(val)) {
// The break stops the loop because its condition has evaluated to true. THEN the rest of the code outside the loop will exicute. 
// If break wasnt present the entire arrays values would be returned. 
      break;

    } else {
// push the value of the element in the array into the returnArray accumilator array. 
      returnArray.push(val);
    }
  }
// return the accumilated array
  return returnArray;
}

// an array of values to test 
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// function called data1 that uses the takeUntil function and passes the array data1. console logged to read the output in console. 
// when x is less than 0 is the function logic
console.log(takeUntil(data1, x => x < 0));

console.log('---');

// an array of values to test
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// function called results2 that uses the takeUntil function and is passed the data2 array and callback function logic
// if the curent index value === a comma. 
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

