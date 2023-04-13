// Write a program that finds the summation of
// every number from 1 to num. The number will
// always be a positive integer greater than 0.

"use strict";

const summation = (num) => {
    let summation = 0;
    for (let i = 0; i <= num; i += 1) {
        summation = summation += i;
    }
    return summation;
};
