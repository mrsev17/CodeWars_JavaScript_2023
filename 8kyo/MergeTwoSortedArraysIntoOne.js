// https://www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript

"use strict";

const mergeArrays = (arr1, arr2) => {
    const merge = arr1.concat(arr2);
    const sortArr3 = merge.sort((a, b) => a - b);
    return Array.from(new Set(merge));
};
