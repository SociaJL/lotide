// Implement without which will return a subset of a given array, removing unwanted elements.

/*
const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// expected output: "The word "fox" is in the sentence"
*/

/*
loop1:
    for (var i in set1) {
loop2:
        for (var j in set2) {
loop3:
            for (var k in set3) {
                break loop2;  // breaks out of loop3 and loop2
            }
        }
    }
*/

const without = function(array, without) {
  let result = [];
    for (let i = 0; i < array.length; i++) {
      if (!without.includes(array[i])) result.push(array[i]);
    }
  /*
    for (let i = 0; i < array.length; i++) {
      let match = false;
      for (let j = 0; j < without.length; j++) {
        if (array[i] === without[j]) ((match = true) && (j = without.length));
      }
      if (match === false) result.push(array[i]);
    }
    */
  return result;
}

console.log(without([1, 2, 3], [5, 6, 1, 55, 12, 23])) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]