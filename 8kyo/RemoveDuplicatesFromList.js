// Define a function that removes duplicates
// from an array of numbers and returns it as
// a result.
// The order of the sequence has to stay the same.

const distinct = (a) => {
    const resObj = {};
    const result = [];
    for (const key of a) {
        if (resObj[key]) {
            resObj[key] += 1;
        } else {
            resObj[key] = 1;
            result.push(+key);
        }
    }
    return result;
};

console.log(distinct([9, 3, 5, 1, 1, 2]));
