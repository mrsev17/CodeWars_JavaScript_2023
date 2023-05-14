// https://www.codewars.com/kata/545afd0761aa4c3055001386/train/javascript

"use strict";

const take = (arr, n) => {
    if (arr.length === 0) return [];
    const result = [];
    for (let i = 0; i < n; i += 1) {
        if (i < arr.length) result.push(arr[i]);
    }
    return result;
};
