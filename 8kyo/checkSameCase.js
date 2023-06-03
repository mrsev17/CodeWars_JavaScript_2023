// https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/train/javascript

"use strict";

const sameCase = (a, b) => {
    if (!a.match(/[a-z]/i) || !b.match(/[a-z]/i)) {
        return -1;
    }
    const isALowercase = a.toLowerCase() === a;
    const isBLowercase = b.toLowerCase() === b;
    if ((isALowercase && isBLowercase) || (!isALowercase && !isBLowercase)) {
        return 1;
    } else {
        return 0;
    }
};

console.log(sameCase("A", "s"));
