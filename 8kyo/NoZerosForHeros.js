// Numbers ending with zeros are boring.
// They might be fun in your world, but not here.
// Get rid of them. Only the ending ones.

"use strict";

const noBoringZeros = (n) => {
    const nArr = n.toString().split("");
    for (let i = nArr.length - 1; i > 0; i -= 1) {
        if (nArr[i] === "0") {
            nArr.pop();
        } else {
            break;
        }
    }
    return +nArr.join("");
};

console.log(noBoringZeros(19050000));
