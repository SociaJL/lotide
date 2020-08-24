// Returns true if both objects have identical keys with identical values.
// Otherwise you get back false

const eqObjects = function(a, b) {  
  // a = object1 & b = object2
  for (const k in a) {
    if (a[k] !== b[k]) {
      return false
    }
  }
  return true
};

const a = { a: "1", c: "2" };
const b = { b: "2", a: "1" };
console.log((eqObjects(a, b))); // => true
/*
const abc = { a: "1", b: "2", c: "3" };
console.log((eqObjects(ab, abc))); // => false
*/