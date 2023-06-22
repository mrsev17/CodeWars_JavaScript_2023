// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

"use strict";

const getSum = (a, b) => {
    if (a > b) {
        [a, b] = [b, a];
    }
    const n = b - a + 1;
    const sum = ((a + b) * n) / 2;
    return sum;
};
