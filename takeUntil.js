console.clear();
const takeUntil = (array, callback) => {
  returnArray = [];
  for (const val of array) {
    if (callback(val)) {
      break;
    } else {
      returnArray.push(val);
    }
  }
  return returnArray;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
console.log(takeUntil(data1, x => x < 0));

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

//[  1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]


/*
const takeUntil = function(array, callback) {
  returnArray = [];
  for (const val of array) {
    if (callback(val)) break;
    returnArray.push(val); 
    }
  return returnArray;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];


