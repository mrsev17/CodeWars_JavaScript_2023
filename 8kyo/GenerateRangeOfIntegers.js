// https://www.codewars.com/kata/55eca815d0d20962e1000106/train/javascript

"use strict";

const generateRange = (min, max, step) => {
    const resultData = [];
    for (let i = min; i <= max; i += step) {
        resultData.push(i);
    }
    return resultData;
};
