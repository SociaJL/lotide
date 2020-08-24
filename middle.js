let theMiddle = []; // empty array to store results in. 

const middle = function (array) {
  if (array.length <= 2) {      // returns [] on arrays <= 2. 
    return theMiddle;

  } else if (array.length % 2 !== 0) {   // returns middle element on arrays that are odd. 
    return (Math.round(array.length / 2));

  } else if (array.length % 2 === 0) {  // returns middle 2 elemtnts in an even array. 
    return [(Math.round(array.length / 2)), (array.length / 2 + 1)];

  };
};

module.exports = middle; 
