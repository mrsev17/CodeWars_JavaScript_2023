// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

"use strict";

const accum = (s) => {
    const result = [];
    const sToSplit = s.split("");
    for (let i = 0; i < sToSplit.length; i += 1) {
        result.push(
            sToSplit[i].toUpperCase() + sToSplit[i].toLowerCase().repeat(i)
        );
    }
    return result.join("-");
};
