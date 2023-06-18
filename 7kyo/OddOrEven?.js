// https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript

"use strict";

const oddOrEven = (array = [0]) => {
    if (array.length < 1) return "even";
    const getSum = array.reduce((a, b) => a + b);
    return getSum % 2 === 0 ? "even" : "odd";
};

console.log(oddOrEven([]));
