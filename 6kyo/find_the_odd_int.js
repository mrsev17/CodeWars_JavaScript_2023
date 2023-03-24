// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

const findOdd = (arr) => {
    let count = {};

    for (let i = 0; i < arr.length; i++) {
        if (count[arr[i]]) {
            console.log(count[arr[i]]);
            count[arr[i]]++;
        } else {
            count[arr[i]] = 1;
        }
    }
    console.log(count);

    for (let num in count) {
        if (count[num] % 2 !== 0) {
            return parseInt(num);
        }
    }

    return null;
};

let arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5];
let oddNum = findOdd(arr);
