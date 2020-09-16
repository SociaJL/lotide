// Implement without which will return a subset of a given array, removing unwanted elements.
// return the first array with any elements removed that are present in the second array. 


/*
Ternary example
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

expected output: "The word "fox" is in the sentence"
*/

/*
    for (let i = 0; i < array.length; i++) {
      let match = false;
      for (let j = 0; j < without.length; j++) {
        if (array[i] === without[j]) ((match = true) && (j = without.length));
      }
      if (match === false) result.push(array[i]);
    }
*/


// function takes in 2 arrays
const without = function(array, without) {
// an empty array accumilator
  let result = [];
// loops through every element in the first array
    for (let i = 0; i < array.length; i++) {
// If the first array index does not contain a value in an index of the second array, then push that index value into the empty array accumilator.
      if (!without.includes(array[i])) result.push(array[i]); // <----- need further review to understand why the [without] array isnt mentioned. 
    }
// return the current value of the array accumilator
  return result;
}
// test case
console.log(without([1, 2, 3], [5, 6, 1, 55, 12, 23])) // => [2, 3]
