// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];


const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    console.log(item);
  }

  return results;
};

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(result1["Jason"], 1);
console.log(result1["Karima"], undefined);
console.log(result1["Fang"], 2);
console.log(result1["Agouhanna"], undefined);