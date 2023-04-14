// Given a random non-negative number, you have
// to return the digits of this number within an
// array in reverse order.

"use strict";

const digitize = (n) =>
    (n + "")
        .split("")
        .map((x) => +x)
        .reverse();
