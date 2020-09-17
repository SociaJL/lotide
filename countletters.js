// create a count of letters in string // iterate through 
// return letters in the string as a key, count as value 


const countLetters = function (string) {
  // an object accumilator set to an empty object
  let letterCount = {};
  // loops through the string input parameter. 
  for (let letters of string) {
    // ternary opperator // condition ? expression1 : expression2;
    // true if the letter in lettercount is a match when looped ? create new key with the value of letter & increase its count by 1.  
    letterCount[letters] = letterCount.hasOwnProperty(letters) ? letterCount[letters] + 1 : 1;

  }
  return letterCount;
};

console.log(countLetters("LGGGGTT"));



