
// given an array, return an array with only the middle elements 
// for arrays with one or two elements, return an empty array 
// for arrays with odd mumber of elements, return an array containing the middle element. 
// for arrays with an even mumber of elements, return an array containing the the two elements in the middle


//need an array accumilator in order to return an empty array
let emptyArray = []; 
// middle function to check the array for length and do something depending on what length is discovered. 
const middle = function (array) {
// checks if the length of the array as 2 or less elements if so, it returns the empty array accumilator
  if (array.length <= 2) {      
    return emptyArray;
// checks if the array is an odd length by using the modulus operator. if remainder does not equal 0, then it must be odd. 
  } else if (array.length % 2 !== 0) {  
// if the array is odd, divide its length by two and rounds down to the next index. 
    return (Math.round(array.length / 2));
// checks if the array is even by using the modulus opperator. if remainder equals 0, than its even. 
  } else if (array.length % 2 === 0) {  
// returns the index position of the two middle elements. 
    return [(Math.round(array.length / 2)), (array.length / 2 + 1)];

  };
};

module.exports = middle; 
 

console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6]));
