// Given three integers a ,b ,c, return
// the largest number obtained after
// inserting the following operators and
// brackets: +, *, ()
// In other words , try every combination
// of a,b,c with [*+()] , and return the
// Maximum Obtained

"use strict";

const expressionMatter = (a, b, c) => {
    const optionOne = a * (b + c);
    const optionTwo = a * b * c;
    const optionThree = a + b * c;
    const optionFour = (a + b) * c;
    const optionFive = a + b + c;
    return [optionOne, optionTwo, optionThree, optionFour, optionFive].reduce(
        (a, b) => Math.max(a, b)
    );
};

