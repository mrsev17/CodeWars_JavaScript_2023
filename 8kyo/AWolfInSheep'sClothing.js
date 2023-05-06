// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript

"use strict";

const warnTheSheep = (queue) => {
    const findWolf = queue.indexOf("wolf", 0);
    console.log(findWolf);
    if (findWolf === queue.length - 1) {
        return "Pls go away and stop eating my sheep";
    } else {
        return `Oi! Sheep number ${
            queue.length - findWolf - 1
        }! You are about to be eaten by a wolf!`;
    }
};

