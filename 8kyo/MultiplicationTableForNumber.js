// Your goal is to return multiplication table
// for number that is always an integer from 1 to 10.

"use strict";

const multiTable = (number) => {
    const result = [];
    for (let i = 1; i <= 10; i += 1) {
        result.push(`${i} * ${number} = ${i * number}`);
    }
    return result.join("\n");
};
