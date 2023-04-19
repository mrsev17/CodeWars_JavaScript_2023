// Sum all the numbers of a given array ( cq. list ),
// except the highest and the lowest element
// () by value, not by index! ).

// The highest or lowest element respectively is a single
// element at each edge, even if there are more than one with the same value.

"use strict";

const sumArray = (array) => {
    if (!array) return 0;
    if (array.length <= 1) return 0;
    const sortArr = array.sort((a, b) => a - b);
    sortArr.pop();
    sortArr.shift();
    return sortArr.reduce((a, b) => a + b, 0);
};
