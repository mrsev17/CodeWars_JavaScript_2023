
// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

"use strict";

const validatePIN = (pin) => {
    const regex = /^\d{4}$|^\d{6}$/;
    return regex.test(pin);
};

