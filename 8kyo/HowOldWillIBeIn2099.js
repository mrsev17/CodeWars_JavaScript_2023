// https://www.codewars.com/kata/5761a717780f8950ce001473/train/javascript

"use strict";

const calculateAge = (x, y) => {
    if (x < y) {
        const check = y - x;
        if (check !== 1) return `You are ${check} years old.`;
        if (check === 1) return `You are 1 year old.`;
    } else if (x > y) {
        let check = y - x;
        if (check < 0) {
            check = check * -1;
        }
        if (check !== 1) return `You will be born in ${check} years.`;
        if (check === 1) return `You will be born in 1 year.`;
    } else {
        return `You were born this very year!`;
    }
};

console.log(calculateAge(2013, 2013));
