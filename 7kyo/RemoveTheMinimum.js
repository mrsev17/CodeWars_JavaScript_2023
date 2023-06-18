// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

"use strict";

const removeSmallest = (numbers) => {
    const copyData = Array.from(numbers);
    const getMin = Math.min(...copyData);
    const indexMin = numbers.indexOf(getMin);
    copyData.splice(indexMin, 1);
    return copyData;
};
