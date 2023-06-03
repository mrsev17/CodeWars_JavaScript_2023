// https://www.codewars.com/kata/5977618080ef220766000022/train/javascript

"use strict";

const usdcny = (usd) => {
    const CNY = 6.75;
    const usdTOcny = usd * CNY;
    if (!Number.isInteger(usdTOcny)) {
        const decimalPart = usdTOcny.toString().split(".")[1];
        if (decimalPart && decimalPart.length === 2) {
            return `${usdTOcny} Chinese Yuan`;
        } else if (decimalPart && decimalPart.length === 1) {
            return `${usdTOcny}0 Chinese Yuan`;
        }
    } else {
        return `${usdTOcny}.00 Chinese Yuan`;
    }
};

console.log(usdcny(3762));
