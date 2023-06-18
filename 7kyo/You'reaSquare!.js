// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

"use strict";

const isSquare = (n) => {
    if (n < 0) return false;
    const getSqr = Math.floor(Math.sqrt(n));
    return Math.pow(getSqr, 2) === n ? true : false;
};
