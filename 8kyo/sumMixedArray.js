// Given an array of integers as strings and numbers,
// return the sum of the array values as if all were numbers.

// Return your answer as a number.

"use strict";

const sumMix = (x) => x.map((num) => +num).reduce((a, b) => a + b);
