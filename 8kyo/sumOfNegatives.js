// Given an array of integers.

// Return an array, where the first
// element is the count of positives
// numbers and the second element is sum
// of negative numbers. 0 is neither positive
// nor negative.

// If the input is an empty array or is null,
// return an empty array.

"use strict";

const countPositivesSumNegatives = (input) => {
    if (input === null) return [];
    let countPos = 0;
    let sumNeg = 0;
    for (let i = 0; i < input.length; i += 1) {
        input[i] > 0 ? (countPos += 1) : (sumNeg += input[i]);
    }
    if (countPos !== 0 || sumNeg !== 0) return [countPos, sumNeg];
    return [];
};
