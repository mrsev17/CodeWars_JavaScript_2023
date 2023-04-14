// Write a function to convert a name into initials.
// This kata strictly takes two words with one space
// in between them.

// The output should be two capital letters with a dot
// separating them.

"use strict";

const abbrevName = (name) => {
    const result = [];
    const nameToArr = name.split(" ");
    for (let i = 0; i < nameToArr.length; i += 1) {
        result.push(nameToArr[i][0].toUpperCase());
    }
    return result.join(".");
};

console.log(abbrevName("Nick Harper"));
