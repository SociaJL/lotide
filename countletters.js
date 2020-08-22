// create a count of letters in string // iterate through 
// return letters in the string as a key, count as value 


const countLetters = function (string) {

  let letterCount = {};

  for (let letters of string) {

    letterCount[letters] = letterCount.hasOwnProperty(letters) ? letterCount[letters] + 1 : 1;  // ternary opperator // condition ? expression1 : expression2;

  }
  return letterCount;
};

console.log(countLetters("LGGGGTT"));



