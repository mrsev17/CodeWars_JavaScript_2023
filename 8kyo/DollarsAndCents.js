// https://www.codewars.com/kata/55902c5eaa8069a5b4000083

"use strict";

const formatMoney = (amount) => {
    if (amount.toString().split("").includes(".")) {
        const amountDot = amount.toString().split(".");
        if (amountDot[1].length < 2) return `$${amount}0`;
        return `$${amount}`;
    }
    return `$${amount}.00`;
};
