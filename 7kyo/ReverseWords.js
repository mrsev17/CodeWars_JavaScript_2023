// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

"use strict";

const reverseWords = (str) => {
    const result = [];
    const strSplit = str.split(" ");
    for (let i = 0; i < strSplit.length; i += 1) {
        result.push(strSplit[i].split("").reverse().join(""));
    }
    return result.join(" ");
};
