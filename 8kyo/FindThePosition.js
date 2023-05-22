// https://www.codewars.com/kata/5808e2006b65bff35500008f/train/javascript

"use strict";

function position(letter) {
    const alphabetData = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];
    return `Position of alphabet: ${
        alphabetData.indexOf(letter.toUpperCase()) + 1
    }`;
}

console.log(position("a"));
