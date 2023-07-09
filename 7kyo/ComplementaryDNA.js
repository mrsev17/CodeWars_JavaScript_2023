// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

"use strict";

const DNAStrand = (dna) => {
    const result = [];
    const dnaArr = dna.split("");
    for (let i = 0; i < dnaArr.length; i += 1) {
        if (dnaArr[i] === "A") result.push("T");
        if (dnaArr[i] === "T") result.push("A");
        if (dnaArr[i] === "G") result.push("C");
        if (dnaArr[i] === "C") result.push("G");
    }
    return result.join("");
};

console.log(DNAStrand("ATTGC"));
