// Build a function that returns an array
// of integers from n to 1 where n>0.

"use strict";

const reverseSeq = (n) => {
    let result = [];
    for (let i = 1; i <= n; i += 1) {
        result.unshift(i);
    }
    return result;
};

console.log(reverseSeq(5));
