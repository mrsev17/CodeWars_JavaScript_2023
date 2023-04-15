// Write a function which calculates the
// average of the numbers in a given list.
// Note: Empty arrays should return 0.

"use strict";

const findAverage = (array) =>
    array.length === 0 ? 0 : array.reduce((x, y) => x + y) / array.length;
