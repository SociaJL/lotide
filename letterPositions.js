// function called letterPositions (sentence)
/* 
resulting object format letter as the key: indicies the letter apears at as value 

{ 
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}
*/

const sentence = 'Thisisatestsentence';

const letterPositions = function(sentence) {
  const results = {};
  // https://regexr.com/3gjtt
  sentence = sentence.replace(/ /g, '');
  for (const char of sentence) {
    results[char] ? results[char]++ : results[char] = 1;
  }
  return results;
};

console.log(letterPositions(sentence));