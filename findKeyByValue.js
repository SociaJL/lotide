/*
Implement the function findKeyByValue which takes in an object and a value. 
It should scan the object and return the first key which contains the given value. 
If no key with that given value is found, then it should return undefined. 
*/

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

// loop throuh array of arrays for a specific value and return its key 

const findKeyByValue = function (shows, show) {
  for (const sh in shows) {
    if (shows[sh] === show) {
      return `Your genre is ${sh}`;
    }
  }
  return "Could not find the show"
}

console.log(findKeyByValue(bestTVShowsByGenre, 'The Wire'));
// search the objects values and return the key //
  // for...in or convert to an array?

// ES6 --  object.keys(), object.values(), object.entries

// object.keys() creates an array that contains the properties of an object. [key, key, key]
// object.values() creates an array that contains the values of every property in an object. [value, value, value]
// object.entries() creates an array of arrays. each inner array has two items. first item is the property, second is value.  [[key, value], [key, value], [key,value]]



// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);