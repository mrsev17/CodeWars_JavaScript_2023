// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

"use strict";

const descendingOrder = (n) =>
    +Array.from("" + n)
        .sort((x, y) => +x - +y)
        .reverse()
        .join("");

console.log(descendingOrder(1021));
