/*
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"
*/

const stars = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}
// if x.starts === 2

callback = x => x.stars === 2;         // if boolean 

const findKey = (obj, cb) => {
  // obj(ject), c(all)b(ack)
  // for key in obj
  for (const key in obj) {
    // print the value of object[key] ~ {stars: x (1, 2, 3, etc)}
    console.log(obj[key])
    // if out callback (boolean) === true
    if (cb(obj[key])) {
      return true;
    }
  }
  // else return false
  return false
}

console.log(findKey(stars, callback, 'stars'));