// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

"use strict";

const maskify = (cc) => {
    const result = [];
    const ccArr = cc.split("").reverse();
    for (let i = 0; i < ccArr.length; i += 1) {
        if (i < 4) {
            result.push(ccArr[i]);
        } else {
            result.push("#");
        }
    }
    return result.reverse().join("");
};
