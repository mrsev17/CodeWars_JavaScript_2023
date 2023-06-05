// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

"use strict";

const isIsogram = (str) => {
    const obj = {};
    const turnStrToArr = str.toLowerCase().split("");
    for (let i = 0; i < turnStrToArr.length; i += 1) {
        const element = turnStrToArr[i];
        if (obj[element]) {
            obj[element] += 1;
        } else {
            obj[element] = 1;
        }
    }
    const checkObj = (obj) => {
        for (const key in obj) {
            if (obj[key] > 1) {
                return false;
            }
        }
        return true;
    };
    return checkObj(obj);
};

const isIsogramVariant2 = (str) =>
    new Set(str.toLowerCase()).size === str.length;
