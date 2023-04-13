// Complete the square sum function so that it squares
// each number passed into it and then sums the results
// together.

"use strict";

const squareSum = (numbers) => {
    if (numbers.length < 1) return 0;
    const makeAllSquare = numbers.map((item) => Math.pow(item, 2));
    return makeAllSquare.reduce((a, b) => a + b);
};
