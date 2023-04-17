// Complete the function so that it finds the
// average of the three scores passed to it and
// returns the letter value associated with that grade.

"use strict";

const getGrade = (s1, s2, s3) => {
    const getAverage = (s1 + s2 + s3) / 3;
    if (getAverage >= 90 && getAverage <= 100) return "A";
    if (getAverage >= 80 && getAverage <= 90) return "B";
    if (getAverage >= 70 && getAverage <= 80) return "C";
    if (getAverage >= 60 && getAverage <= 70) return "D";
    if (getAverage >= 0 && getAverage <= 60) return "F";
};

console.log(getGrade(100, 85, 96));
console.log(getGrade(82, 85, 87));
