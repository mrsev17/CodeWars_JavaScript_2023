// Define String.prototype.toAlternatingCase (or a similar
// function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase
// in your selected language; see the initial solution for details) such that each
// lowercase letter becomes uppercase and each uppercase letter becomes lowercase.
// As usual, your function/method should be pure, i.e. it should not mutate the original string.

"use strict";

String.prototype.toAlternatingCase = function () {
    let result = "";
    for (let i = 0; i < this.length; i += 1) {
        if (this[i] === this[i].toUpperCase()) {
            result += this[i].toLowerCase();
        } else if (this[i] === this[i].toLowerCase()) {
            result += this[i].toUpperCase();
        }
    }
    return result;
};
