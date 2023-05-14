// https://www.codewars.com/kata/524f5125ad9c12894e00003f/train/javascript

"use strict";

const remainder = (n, m) => {
    if (n < 0 && m === 0) return 0;
    if (m === 0) return NaN;
    if (n === m) return 0;
    if (n > m) return n % m;
    if (m > n) return m % n;
};
