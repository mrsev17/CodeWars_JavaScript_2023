// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

"use strict";

const sumTwoSmallestNumbers = (numbers) => {
    const numbersSort = numbers.sort((x, y) => x - y);
    return numbersSort[0] + numbersSort[1];
};
