const assertEqual = require('../assertEqual.js');
const tail = require('../tail.js');


assertEqual(tail([5, 6, 7])[0], [6, 7][0]); 
assertEqual(tail(["Hello", "Lighthouse", "Labs"])[0], ["Lighthouse", "Labs"][0]);

