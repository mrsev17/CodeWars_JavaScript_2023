// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

"use strict";

const squareDigits = (num) => +(num + "").split("").map((x) => Math.pow(+x, 2)).join("");
