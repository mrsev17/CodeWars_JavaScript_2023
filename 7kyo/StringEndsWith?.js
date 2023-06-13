// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript

"use strict";

const solution = (str, ending) => {
    if (ending.length === 0) return true;
    const strArr = str.split(ending);
    console.log(strArr);
    if (strArr[strArr.length - 1].length === 0) {
        return true;
    }
    return false;
};
