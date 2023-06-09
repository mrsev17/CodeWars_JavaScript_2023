// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

"use strict";

const findShort = (s) => {
    return s
        .split(" ")
        .map((item) => item.length)
        .sort((a, b) => a - b)[0];
};

console.log(findShort("Let's travel abroad shall we"));
