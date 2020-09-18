const words = ["ground", "control", "to", "major", "tom"];

// define a map function definition which will take in 2 parameters, an array and a callback. 
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    // push each item of the array into the results accumilator empty array. 
    // Im not sure why callback is referenced here?? ASK A MENTOR! 
    results.push(callback(item));
  }
  return results;
}

// creates a results1 vaiable that has the value of our map function from above and ...
// ... is passed the parameters of the words array, and an anonymous arrow function that returns the index[0] of each word of the words array (element)
const results1 = map(words, word => word[0]); 
console.log(results1);


// ??? Don't understand how that callback parameter and the results1 function are linked.
// I know its using the results1 function as its callback, but i dont know where, or rather how, its referenced to be used. 
// **** map in both functions link the two together!! :)

