
// Complete the function that takes two integers
// (a, b, where a < b) and return an array of all
// integers between the input parameters, including them.

"use strict";

const between = (a, b) => {
    const result = [];
    for (let i = a; i <= b; i += 1) {
        result.push(i);
    }
    return result;
};
