// Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.

console.clear();

const eqObjects = function(a, b) {  
  // a = object1 & b = object2
  for (const k in a) {
    if (a[k] !== b[k]) {
      return false
    }
  }
  return true
};

const assertObjectsEqual = function(actual, expected) {
  // assertObjectsEqual(boolean, boolean)
  if (actual && expected) {
    console.log(`Does Match: ${actual} === ${expected}`);
  } else {
    console.log(`Doesn\'t Match: ${actual} !== ${expected}`);
  }
}

const a = { a: "1", c:231, b: "2"};
const b = { b: "2", a: "1", c: 231};

assertObjectsEqual(eqObjects(a, b), true);

/*
console.log(`Does Match: ${actual} !== ${expected}`);
} else {
  console.log(`Doesn\'t Match: ${actual} !== ${expected}`);
  */