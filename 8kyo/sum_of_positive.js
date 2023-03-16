"use strict";

// You get an array of numbers, return
// the sum of all of the positives ones.

const positiveSum = (arr) => {
    let result = 0;
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] > 0) result += arr[i];
    }
    return result;
};

