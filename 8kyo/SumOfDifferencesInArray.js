// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript

"use strict";

const sumOfDifferences = (arr) => {
    if (arr.length <= 1) return 0;
    const mathData = [];
    const sortData = arr.sort((x, y) => x - y).reverse();
    for (let i = 0; i < sortData.length; i += 1) {
        if (!isNaN(sortData[i] - sortData[i + 1])) {
            mathData.push(sortData[i] - sortData[i + 1]);
        }
    }
    return mathData.reduce((a, b) => a + b);
};
