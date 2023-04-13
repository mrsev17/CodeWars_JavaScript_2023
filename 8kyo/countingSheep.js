// Consider an array/list of sheep where some sheep
// may be missing from their place. We need a function
// that counts the number of sheep present in the array
// (true means present).

"use strict";

const countSheeps = (arrayOfSheep) => {
    let countSheep = 0;
    for (let i = 0; i < arrayOfSheep.length; i += 1) {
        if (arrayOfSheep[i] === true) countSheep += 1;
    }
    return countSheep;
};
