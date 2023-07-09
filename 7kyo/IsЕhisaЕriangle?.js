// https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript

"use strict";

const isTriangle = (a, b, c) => {
    return a + b > c && a + c > b && b + c > a;
};
