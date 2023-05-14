// https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript

"use strict";

const pipeFix = (numbers) => {
    const result = [];
    for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i += 1) {
        result.push(i);
    }
    return result;
};
