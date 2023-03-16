"use strict";

// Write a function that accepts an array
// of 10 integers (between 0 and 9), that
// returns a string of those numbers in the
// form of a phone number.

const createPhoneNumber = (numbers) => {
    let firstPartNumber = ["("];
    let secondPartNumber = [];
    let thirdPartNumber = [];

    for (let i = 0; i < 3; i += 1) {
        firstPartNumber.push(numbers[i]);
    }
    firstPartNumber.push(") ");

    for (let i = 3; i < 6; i += 1) {
        secondPartNumber.push(numbers[i]);
    }
    secondPartNumber.push("-");

    for (let i = 6; i < 10; i += 1) {
        thirdPartNumber.push(numbers[i]);
    }

    return firstPartNumber
        .concat(secondPartNumber)
        .concat(thirdPartNumber)
        .join("");
};
