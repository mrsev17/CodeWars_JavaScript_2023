// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

"use strict";

const XO = (str) => {
    let x = 0;
    let o = 0;
    const makeStrArr = str.split("");
    for (let i = 0; i < makeStrArr.length; i += 1) {
        if (makeStrArr[i].toLowerCase() === "x") x += 1;
        if (makeStrArr[i].toLowerCase() === "o") o += 1;
    }
    return x === o ? true : false;
};
