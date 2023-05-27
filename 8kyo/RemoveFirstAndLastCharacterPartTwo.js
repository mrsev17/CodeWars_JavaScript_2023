// https://www.codewars.com/kata/570597e258b58f6edc00230d/train/javascript

"use strict";

const array = (string) => {
    const turnArr = string.split(",");
    if (turnArr.length < 3) return null;
    return turnArr.slice(1, turnArr.length - 1).join(" ");
};
