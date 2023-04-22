// Create a function that accepts a string and
// a single character, and returns an integer
// of the count of occurrences the 2nd argument
// is found in the first one.

// If no occurrences can be found, a count of
// 0 should be returned.

"use strict";

const strCount = (str, letter) => {
    let result = 0;
    let strToArr = str.split("");
    for (let i = 0; i <= strToArr.length; i += 1) {
        if (strToArr[i] === letter) result += 1;
    }
    return result;
};
