// Given a non-negative integer, 3 for example,
// return a string with a murmur: "1 sheep...2
// sheep...3 sheep...". Input will always be valid,
// i.e. no negative integers.

"use strict";

const countSheep = (num) => {
    let result = [];
    for (let i = 1; i <= num; i += 1) {
        result.push(`${i} sheep...`);
    }
    return result.join("");
};

console.log(countSheep(5));
